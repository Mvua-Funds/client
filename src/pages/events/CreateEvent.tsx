import React, { useEffect, useState } from 'react'
import { Card, Container, Grid, Select, Stack, TextInput, Title, useMantineTheme, Paper, Textarea, Group, Button, LoadingOverlay, Avatar, Text, ActionIcon } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

import { getTheme } from '../../configs/appfunctions';
import { IconAlertCircle, IconCalendarEvent, IconCheck, IconChevronDown, IconX } from '@tabler/icons';
import { SEPARATOR, APP_NAME, NEAR_OBJECT } from '../../configs/appconfig';
import { Helmet } from 'react-helmet';
import { useForm } from "@mantine/form"
import { nanoid } from "nanoid"
import { ShiftALifeFunctionCall } from '../../configs/nearutils';
import { showNotification } from '@mantine/notifications';
import SelectTokenModal from '../../components/common/SelectTokenModal';
import { connectWallet, getCauses } from '../../configs/near/utils';


const CreateEvent = () => {

  const [loading, setLoading] = useState(false)
  const [causes, setCauses] = useState<null | any>([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedToken, setSelectedToken] = useState(NEAR_OBJECT)
  // const [openModal, setOpenModal] = useState(false)

  const theme = useMantineTheme()

  const loadCauses = () => {
    getCauses().then((res: any) => {
      setCauses(res)
    }).catch((err: any) => { })
  }

  const form = useForm({
    initialValues: {
      title: "",
      cause: "",
      description: "",
      date: null,
      venue: "",
      event_type: "",
      channel: null,
      channel_url: null,
      token: "",
      target: ""
    },
    validate: {
      title: value => value === "" ? "Title cannot be empty" : null,
      description: value => value === "" ? "Description cannot be empty" : null,
      cause: value => value === "" ? "Cause cannot be empty" : null,
      date: value => value === null ? "Please select date" : null,
      target: value => value === "" ? "Target amount for the event not set" : null,
      venue: value => value === "" ? "Enter event venue" : null,
    }
  })

  const handleSubmit = () => {

    const walletConnection = window.walletConnection
    const account = walletConnection?.getAccountId()

    let date: any = form.values["date"]
    const year = date?.getFullYear()
    const month = date?.getMonth()
    const day = date?.getDate()

    let data = {
      ...form.values,
      date: date?.toString(),
      dates: `${year},${month},${day}`,
      created_by: account,
      img: "someimageurl",
      id: nanoid() + Date.now(),
      token: selectedToken.address,
    }
    const wallet = window.walletConnection
    const contract = window?.contract
    if (contract) {
      setLoading(true)
      ShiftALifeFunctionCall(wallet, {
        methodName: "create_event",
        args: data,
        gas: null,
        amount: null
      }).then((res: any) => {
        console.log("Response: ", res)
        showNotification({
          message: "Successfully created an event",
          color: "green",
          icon: <IconCheck />
        })
        form.reset()
      }).catch((e: any) => {
        console.error("Error: ", e)
        showNotification({
          message: "Event creation failed",
          color: "red",
          icon: <IconAlertCircle />
        })
      }).finally(() => {
        setLoading(false)
      })
    }
  }

  const isSignedIn = window?.walletConnection?.isSignedIn()

  useEffect(() => {
    loadCauses()
  }, [])

  return (
    <>
      <Helmet>
        <title>Create an event {SEPARATOR} {APP_NAME}</title>
      </Helmet>
      <SelectTokenModal select={setSelectedToken} open={openModal} closeModal={() => setOpenModal(false)} selectedToken={selectedToken} />
      <Container size="xl" py="lg">
        <Grid>
          <Grid.Col md={6} offsetMd={3}>
            <Paper radius="lg" p="xs" sx={{ position: "relative" }}>
              <LoadingOverlay visible={loading} />
              <Title weight={500} align="center" mb="md">Create new event</Title>
              <form onSubmit={form.onSubmit((values) => handleSubmit())}>
                <Stack>
                  <TextInput label="Title" placeholder='Event title' radius="md" styles={{
                    input: {
                      // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                      // borderWidth: "2px"
                    }
                  }} {...form.getInputProps('title')} />
                  <Select label="Select cause" placeholder='Cause of the event' radius="md" styles={{
                    input: {
                      // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                      // borderWidth: "2px"
                    }
                  }} data={causes.map((cause: any) => ({ value: cause?.title, label: cause?.title }))}
                    {...form.getInputProps('cause')} />
                  <Textarea minRows={5} placeholder="Describe the event" label="Description" radius="md" styles={{
                    input: {
                      // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                      // borderWidth: "2px"
                    }
                  }} {...form.getInputProps('description')} />
                  <Grid>
                    <Grid.Col md={6}>
                      <DatePicker
                        label="Pick date"
                        placeholder="Pick event date"
                        radius="md"
                        styles={{
                          input: {
                            // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                            // borderWidth: "2px"
                          }
                        }}
                        {...form.getInputProps('date')}
                      />
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <TextInput label="Venue" placeholder='Event venue' radius="md" styles={{
                        input: {
                          // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                          // borderWidth: "2px"
                        }
                      }} {...form.getInputProps('venue')} />
                    </Grid.Col>
                    <Grid.Col md={4}>
                      <Select label="Event type" placeholder='Event type' radius="md" styles={{
                        input: {
                          // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                          // borderWidth: "2px"
                        }
                      }} data={[
                        { value: "online", label: "Online" },
                        { value: "physical", label: "Physical" },
                      ]} {...form.getInputProps('event_type')} />
                    </Grid.Col>
                    <Grid.Col md={4}>
                      <Select label="Channel" placeholder='Online channel' radius="md" styles={{
                        input: {
                          // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                          // borderWidth: "2px"
                        }
                      }} data={[
                        { value: "facebook", label: "Facebook" },
                        { value: "twitter", label: "Twitter" },
                        { value: "google", label: "Google meet" },
                      ]} {...form.getInputProps('channel')} />
                    </Grid.Col>
                    <Grid.Col md={4}>
                      <TextInput label="Channel link" placeholder="Enter link here" radius="md" styles={{
                        input: {
                          // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                          // borderWidth: "2px"
                        }
                      }} {...form.getInputProps('channel_url')} />
                    </Grid.Col>
                  </Grid>

                  <Grid>
                    <Grid.Col md={6}>
                      <Paper radius="md" sx={{
                        background: getTheme(theme) ? theme.colors.dark[5] : theme.colors.gray[1],
                        padding: "4px"
                      }}>
                        <Text size="sm">Select Token</Text>
                        <Group onClick={() => setOpenModal(true)} px="xs" align="center" position='apart' sx={{
                          background: getTheme(theme) ? theme.colors.dark[6] : theme.colors.gray[0],
                          borderRadius: theme.radius.md,
                          cursor: "pointer"
                        }}>
                          <Group>
                            <Avatar src={selectedToken?.icon} color="indigo">
                              {selectedToken?.symbol.substring(0, 1)}
                            </Avatar>
                            <Stack spacing={0}>
                              <Text size="sm" weight={600}>{selectedToken?.name}</Text>
                              <Text size="xs">{selectedToken?.symbol}</Text>
                            </Stack>
                          </Group>
                          <ActionIcon color="indigo" variant="light">
                            {
                              false ? <IconX /> : <IconChevronDown />
                            }
                          </ActionIcon>
                        </Group>
                      </Paper>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <TextInput label="Target amount" placeholder="Target amount for the event" radius="md" styles={{
                        input: {
                          // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                          // borderWidth: "2px"
                        }
                      }} {...form.getInputProps('target')} />
                    </Grid.Col>
                  </Grid>

                  <Group align="center" position='center'>
                    {
                      !isSignedIn ? <Button radius="xl" px="xl" color="purple" onClick={connectWallet}>Connect wallet</Button>
                        :
                        <Button type='submit' leftIcon={<IconCalendarEvent />} color="purple" radius="xl" px="xl">Create Event</Button>
                    }
                  </Group>
                </Stack>
              </form>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default CreateEvent