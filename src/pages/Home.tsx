import React from 'react'
// COlor: #242a49

import { Box, Button, Center, Container, Grid, Group, Image, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import bodyStyles from '../components/styles/bodyStyles';
import { Helmet } from 'react-helmet';
import { APP_NAME } from '../configs/appconfig';
import HomeBannerCalendar from '../components/calendar/HomeBannerCalendar';

import Campaign from '../components/recents/Campaign';

import HomeHeroCreateBtn, { HomeHeroDonateBtn } from '../components/common/HomeHeroCreateBtn';
import { getTheme } from '../configs/appfunctions';
import RecentCampaigns from '../components/recents/RecentCampaigns';
import RecentEvents from '../components/recents/RecentEvents';
import HomePageWhy from '../components/common/HomePageWhy';


const Home = () => {
    const theme = useMantineTheme()
    const { classes } = bodyStyles()
    return (
        <>
            <Helmet>
                <title> {APP_NAME} - Donate today, save a life.</title>
                <meta name='description' content='We help raise funds through donations in the Near Blockchain environment to help fight calamities within Kenya and world at large.' />
            </Helmet>
            <Container py="xs" size="xl">
                <Grid>
                    <Grid.Col className='fixed-height position-relative' md={7}>
                        <Box py="xl" sx={{
                            position: "absolute",
                            bottom: "60px",
                            left: 0,
                        }}>
                            <Stack>
                                <Title className={classes.title}>Shift a Life <br /> Foundation</Title>
                                <Text className={classes.text}>
                                    We help raise funds through donations in the Near Blockchain environment to help fight calamities within Kenya and world at large.

                                    <br />
                                    <br />
                                    Our aim is to provide a clear and easy to use platform to help you <span className={classes.bold}>shift a life</span>.
                                </Text>
                                <Group mt="xl">
                                    <HomeHeroDonateBtn />
                                    <HomeHeroCreateBtn />
                                </Group>
                            </Stack>
                        </Box>
                    </Grid.Col>
                    <Grid.Col md={5} className='fixed-height' py="xl">
                        <HomeBannerCalendar />
                    </Grid.Col>

                </Grid>

                {/* Why this platform */}
                <HomePageWhy />
                
                {/* Recent campaigns */}
                <Campaign />
                <RecentCampaigns />

                {/* Recent events */}
                <RecentEvents />

                <Box>

                </Box>
            </Container>
        </>
    )
}

export default Home