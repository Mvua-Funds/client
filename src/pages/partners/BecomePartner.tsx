import { Button, Center, Container, FileInput, Grid, Group, Image, LoadingOverlay, Paper, TextInput, Title } from '@mantine/core'
import React from 'react'
import { Helmet } from 'react-helmet';
import { SEPARATOR, APP_NAME } from '../../configs/appconfig';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconX, IconAlertCircle } from '@tabler/icons';
import { v4 } from 'uuid';
import { useNavigate } from "react-router-dom";


//firebase imports
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { url } from 'inspector';
import { useMemo } from 'react';


const BecomePartner = () => {
  const [loading, setLoading] = useState(false)

  const [uploading, setUploading] = useState(false)
  const [logo, setLogo] = useState<any>(null)
  const [banner, setBanner] = useState<any>(null)


  //variable to store entire image folder
  // const imageListRef = ref(storage, "images/")

  const UploadImage = (upload_type: string, file: any) => {
    setUploading(true)
    const imageRef = ref(storage, `images/${file['name'] + v4()}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        if (upload_type === "logo") {
          setLogo(url)
        }
        else if (upload_type === "banner") {
          setBanner(url)
        }
        setUploading(false)
      })

    })
  };

  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      webUrl: "",
      logo: null,
      banner: null
    },
    validate: {
      name: value => value === "" || value.length < 5 ? "Enter partner name" : null,
      logo: value => value === null ? "Select logo" : null,
      banner: value => value === null ? "Select banner image" : null,
    }
  })

  const uploadFiles = () => {
    UploadImage('logo', form.values["logo"])
    UploadImage('banner', form.values["banner"])
  }

  const handleSubmit = () => {

    const wallet = window.walletConnection
    const contract = window.contract
    if (contract) {
      const data = {
        ...form.values,
        logo: logo,
        banner: banner,
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
          navigate("/partners")
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
  //varable to navigate to Partners page
  let navigate = useNavigate();

  const waitChange = useMemo(() => {
    return {
      continue: (logo && banner) ? true : false
    }
  }, [logo, banner])

  useEffect(() => {
    if (logo && banner) {
      // handleSubmit()
      console.log("we are creating the partner")
    }
  }, [waitChange])

  return (
    <>
      <Helmet>
        <title>Register Partner {SEPARATOR} {APP_NAME} </title>
      </Helmet>
      <Container py="xl">
        <Paper radius="lg" p="xs" py="xl" sx={{ position: "relative" }}>

          <Title align='center' mb="xl">Register new partner </Title>

          <LoadingOverlay visible={loading || uploading} />
          <form onSubmit={form.onSubmit((values) => uploadFiles())}>
            <TextInput label="Partner name" placeholder='Enter partner name' {...form.getInputProps('name')} />

            <TextInput label="Partner description" placeholder='Enter description' {...form.getInputProps('description')} />
            <TextInput label="Partner's company website" placeholder='Enter website link' {...form.getInputProps('webUrl')} />
            <FileInput accept="image/png,image/jpeg, image/jpg" label="Partner Logo" placeholder='Select logo' {...form.getInputProps('logo')} />
            <FileInput accept="image/png,image/jpeg, image/jpg" label="Partner Banner" placeholder='Select banner' {...form.getInputProps('banner')} />

            <Group position='center' my="xl">
              <Button type='submit' radius="xl" color="indigo">Register</Button>
            </Group>

          </form>
          <Grid>
            <Grid.Col md={6}>
              <Title order={3} align="center">Logo</Title>
              <Center>
                {
                  logo ? <Image radius="lg" src={logo} /> : null
                }
              </Center>
            </Grid.Col>
            <Grid.Col md={6}>
              <Title order={3} align="center">Banner</Title>
              <Center>
                {
                  banner ? <Image radius="lg" src={banner} /> : null
                }
              </Center>
            </Grid.Col>
          </Grid>

        </Paper>
      </Container>
    </>
  )
}

export default BecomePartner