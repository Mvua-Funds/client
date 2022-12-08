import React from 'react'
// COlor: #242a49

import { Box, Button, Container, Grid, Group, Stack, Text, Title, useMantineTheme, Image, SegmentedControl, Paper, Center } from '@mantine/core';
import bodyStyles from '../components/styles/bodyStyles';
import { getTheme } from '../configs/appfunctions';
import { Helmet } from 'react-helmet';
import { SEPARATOR, APP_NAME } from '../configs/appconfig';
import { Calendar } from '@mantine/dates';
import { IconCalendarEvent, IconSpeakerphone } from '@tabler/icons';
import HomeBannerCalendar from '../components/calendar/HomeBannerCalendar';

const Home = () => {
    const theme = useMantineTheme()
    const { classes } = bodyStyles()
    return (
        <>
            <Helmet>
                <title> {APP_NAME} - Make change today</title>
            </Helmet>
            <Container py="xs" size="xl">
                <div>
                    <Grid>
                        <Grid.Col className='fixed-height position-relative' md={7}>
                            <Box py="xl" sx={{
                                position: "absolute",
                                bottom: "60px",
                                left: 0,
                            }}>
                                <Stack>
                                    {/* {
                                        getTheme(theme) ? (
                                            <Image src='/near/no_margin/built-rev_nomargin.png' width="150px" />
                                        ) : (
                                            <Image src='/near/no_margin/built_nomargin.png' width="150px" />
                                        )
                                    } */}
                                    <Title className={classes.title}>Shift a Life <br /> Foundation</Title>
                                    <Text className={classes.text}>
                                        We help raise funds through donations in the Near Blockchain environment to help fight calamities within Kenya.
                                        <br />
                                        <br />
                                        Our aim is to provide a clear and easy to use platform to help you <span className={classes.bold}>shift a life</span>.
                                    </Text>
                                    <Group mt="xl">
                                        <Button radius="xl" px="xl" color="purple">Donate Today</Button>
                                        <Button radius="xl" px="xl" color="purple" variant="outline">Create Event / Campaign</Button>
                                    </Group>
                                </Stack>
                            </Box>
                        </Grid.Col>
                        <Grid.Col md={5} className='fixed-height' py="xl">
                            <HomeBannerCalendar />
                        </Grid.Col>
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default Home