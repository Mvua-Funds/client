import { Card, Center, Grid, Stack } from '@mantine/core'
import React from 'react'
import { Avatar } from '@mantine/core';
import { Title } from '@mantine/core';
import bodyStyles from '../styles/bodyStyles';

const whys = [
    {
        id: 1,
        title: "Contribute to the world",
        description: "",
        icon: ""
    },
    {
        id: 2,
        title: "Comfortable country",
        description: "",
        icon: ""
    },
    {
        id: 3,
        title: "Humane Treatment",
        description: "",
        icon: ""
    },
]

const HomePageWhy = () => {
    const { theme, classes } = bodyStyles()
    return (
        <>
            <Grid>
                {
                    whys.map((why: any, i: any) => (
                        <Grid.Col md={4} key={`why_${why.id}`}>
                            <Card radius="lg" shadow="xl">
                                <Stack>
                                    <Avatar mx="auto" size="xl" radius="lg" />
                                    <Title align='center' order={3} weight={400} className={classes.text} >{why.title}</Title>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    ))
                }
            </Grid>
        </>
    )
}

export default HomePageWhy
