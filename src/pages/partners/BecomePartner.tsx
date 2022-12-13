import { Button, Container, Group, LoadingOverlay, Paper, TextInput, Title } from '@mantine/core'
import React from 'react'
import { Helmet } from 'react-helmet';
import { SEPARATOR, APP_NAME } from '../../configs/appconfig';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconX, IconAlertCircle } from '@tabler/icons';
import { v4 } from 'uuid';

//firebase imports
import { storage } from '../../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
// import { url } from 'inspector';


const BecomePartner = () => {
  const [loading, setLoading] = useState(false)
  //state for image
  const [imageUpload, setImageupload] = useState(null);
  //state for image url
  const [imageList, setImageList] = useState<null | any>([]);

  //variable to store entire image folder
  const imageListRef = ref(storage, "images/")

  const UploadImage = () => {
    if (imageUpload == null) return;
    //firebase funcs to upload file
    const imageRef = ref(storage, `images/${imageUpload['name'] + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded")
    })
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item: any) => {
        getDownloadURL(item).then((url: any) => {
          //type error
          setImageList((prev: any) => [...prev, url]);
        }
        )
      })
    })
  }, [])
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      webUrl: "",
      logo: "",
      banner: ""
    },
    validate: {
      name: value => value === "" || value.length < 5 ? "Enter partner name" : null
    }
  })

  const handleSubmit = () => {

    const wallet = window.walletConnection
    const contract = window.contract
    if (contract) {
      const data = {
        ...form.values,
        id: form.values["name"],
      }
      setLoading(true)
      contract.register_as_partner(data).then((res: any) => {
        if (res === "success") {
          showNotification({
            message: "Partner successfully registered",
            color: "green",
            icon: <IconCheck />
          })
          form.reset()
          return
        } else {
          showNotification({
            message: "Partner already exists",
            color: "red",
            icon: <IconX />
          })
        }
      }).catch((e: any) => {
        showNotification({
          message: "Partner registration failed",
          color: "red",
          icon: <IconAlertCircle />
        })
      }).finally(() => {
        setLoading(false)
      })
    }
  }

  return (
    <>
      <Helmet>
        <title>Register Partner {SEPARATOR} {APP_NAME} </title>
      </Helmet>
      <Container py="xl">
        <Paper radius="lg" p="xs" py="xl" sx={{ position: "relative" }}>

          <Title align='center' mb="xl">Register new partner </Title>

          <LoadingOverlay visible={loading} />
          <form onSubmit={form.onSubmit((values) => handleSubmit())}>
            <TextInput label="Partner name" placeholder='Enter partner name' {...form.getInputProps('name')} />

            <TextInput label="Partner description" placeholder='Enter description' {...form.getInputProps('description')} />
            <TextInput label="Partner's company website" placeholder='Enter website link' {...form.getInputProps('webUrl')} />

            <label htmlFor="logo-upload ">
              <span> upload Logo </span>
              <input
                // onChange={(event)=>{setImageupload(event.target.files[0])}}
                onClick={UploadImage} id="logo-upload" name="logo-upload" type="file" />

            </label>

            <label htmlFor="Banner-upload ">
              <span> upload Banner </span>
              <input id="banner-upload" name="banner-upload" type="file" />

            </label>

            <Group position='center' my="xl">
              <Button
                onClick={UploadImage}
                type='submit' radius="xl" color="indigo">Register</Button>
            </Group>

          </form>
          {imageList.map((url: any) => {
            return <img src={url} />
          })}
        </Paper>
      </Container>
    </>
  )
}

export default BecomePartner