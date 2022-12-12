import { Button, Container, Group, LoadingOverlay, Paper, TextInput, Title } from '@mantine/core'
import React from 'react'
import { Helmet } from 'react-helmet';
import { SEPARATOR, APP_NAME } from '../../configs/appconfig';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconX, IconAlertCircle } from '@tabler/icons';

const BecomePartner = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm({
    initialValues: {
      name: ""
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
        if(res === "success"){
          showNotification({
            message: "Partner successfully registered",
            color: "green",
            icon: <IconCheck />
          })
          form.reset()
          return
        } else{
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
        <Paper radius="lg" p="xs" py="xl" sx={{position: "relative"}}>
          <Title align='center' mb="xl">Register new partner </Title>
          <LoadingOverlay visible={loading} />
          <form onSubmit={form.onSubmit((values) => handleSubmit())}>
            <TextInput label="Partner name" placeholder='Enter partner name' {...form.getInputProps('name')} />
            <Group position='center' my="xl">
              <Button type='submit' radius="xl" color="indigo">Register</Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default BecomePartner