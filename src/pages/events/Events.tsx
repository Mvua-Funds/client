import { Container, Grid, Box, Stack, Title, Group, Button, Text, Image, Paper, Center } from '@mantine/core';
import React from 'react'
import { Helmet } from 'react-helmet';
import HomeBannerCalendar from '../../components/calendar/HomeBannerCalendar';
import { SEPARATOR, APP_NAME } from '../../configs/appconfig';
import bodyStyles from '../../components/styles/bodyStyles';
import { getTheme } from '../../configs/appfunctions';
import { Calendar } from '@mantine/dates';
import { CustomCalendar } from '../../components/calendar/CustomCalendar';

import { nanoid } from 'nanoid'
import EventCard from '../../components/activities/EventCard';

const events = [
  {
    id: nanoid(),
    title: 'Kisii Tree Planting Campaign',
    target: 5000,
    current: 500,
    token: "Near",
    date: "2022 Dec 17",
  },
  {
    id: nanoid(),
    title: 'School repairing Campaign West Pokot',
    target: 20000,
    current: 1000,
    token: "Near",
    date: "2022 Dec 05",
  },
  {
    id: nanoid(),
    title: 'Lunch Campaign Wajir',
    target: 10000,
    current: 1000,
    token: "Dai",
    date: "2022 Dec 05",
  },
  {
    id: nanoid(),
    title: 'Lunch Campaign Wajir',
    target: 10000,
    current: 1000,
    token: "Dai",
    date: "2022 Dec 05",
  }
]

const Events = () => {

  const { classes, theme } = bodyStyles()

  return (
    <>
      <Helmet>
        <title>Events {SEPARATOR} {APP_NAME}</title>
      </Helmet>
      <Container py="xs" size="xl"  sx={{ marginBottom: "70px" }}>
        <Grid>
          <Grid.Col className='fixed-height position-relative' md={7}>
            <Box py="xl" sx={{
              position: "absolute",
              bottom: "60px",
              left: 0,
            }}>
              <Stack>
                {
                  getTheme(theme) ? (
                    <Image src='/near/no_margin/built-rev_nomargin.png' width="150px" />
                  ) : (
                    <Image src='/near/no_margin/built_nomargin.png' width="150px" />
                  )
                }
                <Title className={classes.title}>Events</Title>
                <Text className={classes.text}>
                  Events are short term activities that we carry out in relation to making donations to help <span className={classes.bold}>Shift a Life</span> of somebody or a community.
                </Text>
                <Group mt="xl">
                  <Button radius="xl" px="xl" color="purple">View all</Button>
                  <Button radius="xl" px="xl" color="purple" variant="outline">Create Event</Button>
                </Group>
              </Stack>
            </Box>
          </Grid.Col>
          <Grid.Col md={5} className='fixed-height' py="xl">
            <Center className='h-100'>
              <Paper p="xs" radius="lg">
                <Calendar fullWidth month={new Date()} />
              </Paper>
            </Center>
          </Grid.Col>
        </Grid>
        <Box>
          <Stack spacing={0} mb="md">
            <Title className={classes.subtitle} order={2}>Events display</Title>
            <Text size="sm" className={classes.text}>
              Preview all the events on the calendar
            </Text>
          </Stack>
          <CustomCalendar />
        </Box>
        <Stack spacing={0} my="xl">
          <Title className={classes.subtitle}>Make Donations</Title>
          <Text className={classes.text}>
            Events are short term activities that we carry out in relation to making donations to help <span className={classes.bold}>Shift a Life</span> of somebody or a community.
          </Text>
        </Stack>
        <Grid>
          {
            events.map((c: any, i: any) => (
              <Grid.Col md={3} key={`campaign_${c.id}`}>
                <EventCard details={c} />
              </Grid.Col>
            ))
          }
        </Grid>
      </Container>
    </>
  )
}

export default Events