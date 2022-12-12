import React from 'react'
// COlor: #242a49

import { Box, Button, Container, Grid, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import bodyStyles from '../components/styles/bodyStyles';
import { Helmet } from 'react-helmet';
import {  APP_NAME } from '../configs/appconfig';
import HomeBannerCalendar from '../components/calendar/HomeBannerCalendar';
<<<<<<< HEAD
import HomeHeroCreateBtn from '../components/common/HomeHeroCreateBtn';
import Campaign from '../components/recents/Campaign';
=======
import HomeHeroCreateBtn, { HomeHeroDonateBtn } from '../components/common/HomeHeroCreateBtn';
>>>>>>> 3d414d130305f2cd063ea01189a8cd274ca7f6a7

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
                    <Campaign />
                </div>
            </Container>
        </>
    )
}

export default Home