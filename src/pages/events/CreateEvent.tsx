import React from 'react'
import { Card, Container, Grid, Select, Stack, TextInput, Title, useMantineTheme, Paper, Textarea, Group, Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

import { getTheme } from '../../configs/appfunctions';
import { IconCalendarEvent } from '@tabler/icons';
import { SEPARATOR, APP_NAME } from '../../configs/appconfig';
import { Helmet } from 'react-helmet';


const CreateEvent = () => {

  const theme = useMantineTheme()

  return (
    <>
    <Helmet>
      <title>Create an event {SEPARATOR} {APP_NAME}</title>
    </Helmet>
      <Container size="xl" py="lg">
        <Grid>
          <Grid.Col md={6} offsetMd={3}>
            <Paper radius="lg" p="xs">
              <Title weight={500} align="center" mb="md">Create new event</Title>
              <form>
                <Stack>
                  <TextInput label="Title" placeholder='Event title' radius="md" styles={{
                    input: {
                      // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                      // borderWidth: "2px"
                    }
                  }} />
                  <Select label="Select cause" placeholder='Cause of the event' radius="md" styles={{
                    input: {
                      // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                      // borderWidth: "2px"
                    }
                  }} data={[
                    { value: "Tree planting", label: "Tree planting" }
                  ]} />
                  <Textarea minRows={5} placeholder="Describe the event" label="Description" radius="md" styles={{
                    input: {
                      // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                      // borderWidth: "2px"
                    }
                  }} />
                  <Grid>
                    <Grid.Col md={6}>
                      <DatePicker
                        label="Pick start date"
                        placeholder="Pick event date"
                        radius="md"
                        styles={{
                          input: {
                            // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                            // borderWidth: "2px"
                          }
                        }}
                      />
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <TextInput label="Venue" placeholder='Event venue' radius="md" styles={{
                        input: {
                          // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                          // borderWidth: "2px"
                        }
                      }} />
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
                      ]} />
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
                      ]} />
                    </Grid.Col>
                    <Grid.Col md={4}>
                      <TextInput label="Channel link" placeholder="Enter link here" radius="md" styles={{
                        input: {
                          // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                          // borderWidth: "2px"
                        }
                      }} />
                    </Grid.Col>
                  </Grid>

                  <Grid>
                    <Grid.Col md={6}>
                      <Select label="Select token to use" placeholder='Select asset to donate in' radius="md" styles={{
                        input: {
                          // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                          // borderWidth: "2px"
                        }
                      }} data={[
                        { value: "Near", label: "Near" }
                      ]} />
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <TextInput label="Target amount" placeholder="Target amount for the event" radius="md" styles={{
                        input: {
                          // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                          // borderWidth: "2px"
                        }
                      }} />
                    </Grid.Col>
                  </Grid>

                  <Group align="center" position='center'>
                    <Button leftIcon={<IconCalendarEvent />} color="purple" radius="xl" px="xl">Create Event</Button>
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