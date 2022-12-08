import React from 'react'
import { Card, Container, Grid, Select, Stack, TextInput, Title, useMantineTheme, Paper, Textarea, Group, Button } from '@mantine/core';
import { DatePicker, DateRangePicker } from '@mantine/dates';

import { getTheme } from '../../configs/appfunctions';
import { IconSpeakerphone } from '@tabler/icons';
import { Helmet } from 'react-helmet';
import { SEPARATOR, APP_NAME } from '../../configs/appconfig';


const CreateCampaign = () => {

  const theme = useMantineTheme()

  return (
    <>
      <Helmet>
        <title>Create an campaign {SEPARATOR} {APP_NAME}</title>
      </Helmet>
      <Container size="xl" py="lg">
        <Grid>
          <Grid.Col md={6} offsetMd={3}>
            <Paper radius="lg" p="xs">
              <Title weight={500} align="center" mb="md">Create new campaign</Title>
              <form>
                <Stack>
                  <TextInput label="Title" placeholder='Campaign title' radius="md" styles={{
                    input: {
                      // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                      // borderWidth: "2px"
                    }
                  }} />
                  <Select label="Select cause" placeholder='Cause of the campaign' radius="md" styles={{
                    input: {
                      // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                      // borderWidth: "2px"
                    }
                  }} data={[
                    { value: "Tree planting", label: "Tree planting" }
                  ]} />
                  <Textarea minRows={5} placeholder="Describe the campaign" label="Description" radius="md" styles={{
                    input: {
                      // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                      // borderWidth: "2px"
                    }
                  }} />
                  <Grid>
                    <Grid.Col md={6}>
                      <DatePicker
                        label="Pick start date"
                        placeholder="Pick campaign starting date"
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
                      <DatePicker
                        label="Pick end date"
                        placeholder="Pick campaign ending date"
                        radius="md"
                        styles={{
                          input: {
                            // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                            // borderWidth: "2px"
                          }
                        }}
                      />
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
                      <TextInput label="Target amount" placeholder="Target amount for the campaign" radius="md" styles={{
                        input: {
                          // borderColor: getTheme(theme) ? theme.colors.dark[4] : "#242a49",
                          // borderWidth: "2px"
                        }
                      }} />
                    </Grid.Col>
                  </Grid>

                  <Group align="center" position='center'>
                    <Button leftIcon={<IconSpeakerphone />} color="purple" radius="xl" px="xl">Create Campaign</Button>
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

export default CreateCampaign