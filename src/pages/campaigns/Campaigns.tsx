import React from 'react'
import { SEPARATOR, APP_NAME } from '../../configs/appconfig'
import { Helmet } from 'react-helmet';
import { Grid, Container, Box, Button, Center, Group, Paper, Stack, Title, Image, Text, Card, Badge } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { CustomCalendar } from '../../components/calendar/CustomCalendar';
import { getTheme } from '../../configs/appfunctions';
import bodyStyles from '../../components/styles/bodyStyles';
import { IconCalendar, IconCashBanknote } from '@tabler/icons';
import { nanoid } from 'nanoid'
import CampaignCard from '../../components/activities/CampaignCard';

const campaigns = [
  {
    id: nanoid(),
    title: 'Kisii Tree Planting Campaign',
    target: 5000,
    current: 500,
    token: "Near",
    start_date: "2022 Dec 17",
    end_date: "2023 April 17",
  },
  {
    id: nanoid(),
    title: 'School repairing Campaign West Pokot',
    target: 20000,
    current: 1000,
    token: "Near",
    start_date: "2022 Dec 05",
    end_date: "2023 July 30",
  },
  {
    id: nanoid(),
    title: 'Lunch Campaign Wajir',
    target: 10000,
    current: 1000,
    token: "Dai",
    start_date: "2022 Dec 05",
    end_date: "2023 July 30",
  },
  {
    id: nanoid(),
    title: 'Lunch Campaign Wajir',
    target: 10000,
    current: 1000,
    token: "Dai",
    start_date: "2022 Dec 05",
    end_date: "2023 July 30",
  }
]

const Campaigns = () => {

  const { classes, theme } = bodyStyles()

  return (
    <>
      <Helmet>
        <title>Campaigns {SEPARATOR} {APP_NAME}</title>
      </Helmet>
      <Container py="xs" size="xl" sx={{ marginBottom: "70px" }}>
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
                <Title className={classes.title}>Campaigns</Title>
                <Text className={classes.text}>
                  Campaigns are long term activities that we carry out in relation to making donations to help <span className={classes.bold}>Shift a Life</span> of somebody or a community.
                </Text>
                <Group mt="xl">
                  <Button radius="xl" px="xl" color="purple">View all</Button>
                  <Button radius="xl" px="xl" color="purple" variant="outline">Create Campaign</Button>
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
            <Title className={classes.subtitle} order={2}>Campaigns display</Title>
            <Text size="sm" className={classes.text}>
              Preview all the campaigns on the calendar
            </Text>
          </Stack>
          <CustomCalendar />
        </Box>

        <Stack spacing={0} my="xl">
          <Title className={classes.subtitle}>Make Donations</Title>
          <Text className={classes.text}>
            Campaigns are long term activities that we carry out in relation to making donations to help <span className={classes.bold}>Shift a Life</span> of somebody or a community.
          </Text>
        </Stack>
        <Grid>
          {
            campaigns.map((c: any, i: any) => (
              <Grid.Col md={3} key={`campaign_${c.id}`}>
                <CampaignCard details={c} />
              </Grid.Col>
            ))
          }
        </Grid>
      </Container>
    </>
  )
}

export default Campaigns

