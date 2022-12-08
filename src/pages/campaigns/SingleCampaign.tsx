import { Avatar, Box, Button, Center, Container, Grid, Group, List, Paper, ScrollArea, Stack, Table, Text, TextInput, Title } from '@mantine/core';
import React from 'react'
import { Helmet } from 'react-helmet';
import { SEPARATOR, APP_NAME } from '../../configs/appconfig';
import bodyStyles from '../../components/styles/bodyStyles';
import { getTheme } from '../../configs/appfunctions';
import { IconCashBanknote } from '@tabler/icons';

const SingleCampaign = () => {
  const { theme, classes } = bodyStyles()
  return (
    <>
      <Helmet>
        <title>Campaign {SEPARATOR} {APP_NAME}</title>
      </Helmet>
      <Container size="lg" py="xl" sx={{ paddingBottom: "60px" }}>
        <Grid>
          <Grid.Col md={7}>

            <Box>
              <Title order={1} className={classes.subtitle} mb="xl">Tree planting campaign Kisii</Title>
              <img loading='lazy' src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBmb3Jlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  aspectRatio: "16/9",
                  borderRadius: theme.radius.lg,
                }} />
              <Text className={classes.text} my="md" p="xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore laboriosam magnam ducimus quae molestiae mollitia libero harum debitis eos commodi ipsam,
                pariatur veritatis animi reiciendis ullam nesciunt impedit non provident. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore laboriosam magnam ducimus quae molestiae mollitia libero harum debitis eos commodi ipsam,
                pariatur veritatis animi reiciendis ullam nesciunt impedit non provident.
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col md={5}>
            <Paper radius="lg" p="xs">
              <Title order={3} className={classes.text} mb="sm" align='center'>Make donation</Title>
              <Stack>
                <TextInput radius="lg" placeholder='Amt in Near' label={<Text className={classes.text} mb="xs">Enter Amount to Donate</Text>} size="lg" sx={{ overflow: "hidden" }} icon={<Avatar size="sm" src="/near/no_margin/icon_nm.png" sx={{
                  // background: getTheme(theme) ? theme.colors.dark[5] : theme.colors.gray[1],
                  width: "30px",
                  height: "30px",
                  minWidth: "30px !important",
                  minHeight: "30px !important",
                  maxWidth: "30px !important",
                  maxHeight: "30px !important",
                  padding: "4px"
                }} />} />
                <Text size="xs" align="center">This campaign is set to only receive Near</Text>
                <Button color="indigo" size="md" leftIcon={<IconCashBanknote />} radius="xl" fullWidth>
                  Donate
                </Button>
                <Title order={3} className={classes.text} align='center'>Total donations</Title>
                <Center>
                  <Avatar src="/near/no_margin/icon_nm.png" />
                </Center>
                <Text className={classes.text} align="center" weight={600}>10,000 Near</Text>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>
        <Paper radius="lg" p="xs" my="xl">
          <Group align="center" position='apart'>
            <Stack spacing={0} mb="md">
              <Title className={classes.subtitle} order={3}>All Donations</Title>
              <Text size="sm" className={classes.text}>
                Donations for this campaign
              </Text>
            </Stack>
            <Stack spacing={0}>
              <Text size="md" className={classes.text} align="end" weight={700}>Total: 10, 000 Near</Text>
              <Text size="xs" className={classes.text} align="end">Approximately: 20, 000 USD</Text>
            </Stack>
          </Group>
          <ScrollArea>
            <Table verticalSpacing={16} fontSize="sm" striped>
              <thead>
                <tr>
                  <th className='custom-th'>Donor</th>
                  <th className='custom-th'>Token</th>
                  <th className='custom-th'>Amount</th>
                  <th className='custom-th'>Amount USD</th>
                  <th className='custom-th'>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dalmasonto.testnet</td>
                  <td>
                    <Group>
                      <Avatar src="/near/no_margin/icon_nm.png" size="sm" />
                      <Stack spacing={-2}>
                        <Text size="sm" weight={600}>Near</Text>
                        <Text size="xs">Near</Text>
                      </Stack>
                    </Group>
                  </td>
                  <td>100</td>
                  <td>
                    <Group position='apart'>
                      <Text size="sm">$</Text>
                      <Text size="sm">300</Text>
                    </Group>
                  </td>
                  <td>2022 Dec 17</td>
                </tr>
                <tr>
                  <td>dalmasonto.testnet</td>
                  <td>
                    <Group>
                      <Avatar src="/near/no_margin/icon_nm.png" size="sm" />
                      <Stack spacing={-2}>
                        <Text size="sm" weight={600}>Near</Text>
                        <Text size="xs">Near</Text>
                      </Stack>
                    </Group>
                  </td>
                  <td>100</td>
                  <td>
                    <Group position='apart'>
                      <Text size="sm">$</Text>
                      <Text size="sm">300</Text>
                    </Group>
                  </td>
                  <td>2022 Dec 17</td>
                </tr>
              </tbody>
            </Table>
          </ScrollArea>
        </Paper>
        <Paper radius="lg" p="xs" my="xl">
          <Group align="center" position='apart'>
            <Stack spacing={0} mb="md">
              <Title className={classes.subtitle1} order={4}>Campaing extra information</Title>
              <Text size="sm" className={classes.text}>
                Extra infor about the campaign.
              </Text>
            </Stack>
            <Stack spacing={0}>
              <Text size="md" className={classes.text} align="end" weight={700}>Total: 10, 000 Near</Text>
              <Text size="xs" className={classes.text} align="end">Approximately: 20, 000 USD</Text>
            </Stack>
          </Group>
          <Title order={4}>Partners</Title>
          <Text size="sm" className={classes.text}>Who are partners? <span className={classes.dotted}>Read More</span> </Text>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "100px" }}>Position</th>
                <th style={{ minWidth: "200px" }}>Partner</th>
                <th style={{ minWidth: "200px" }}>Votes</th>
                <th style={{ minWidth: "200px" }}>UpVote</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Kenya Red Cross</td>
                <td>0</td>
                <td>
                  <Button radius="xl" color="indigo" size='xs' px="xl">Vote</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Kenya Red Cross</td>
                <td>0</td>
                <td>
                  <Button radius="xl" color="indigo" size='xs' px="xl">Vote</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Paper>
      </Container>
    </>
  )
}

export default SingleCampaign