import { Title } from '@mantine/core';
import React from 'react'
import bodyStyles from '../styles/bodyStyles';

const RecentEvents = () => {

    const { theme, classes } = bodyStyles()

    return (
        <>
            <Title order={2} weight={500} className={classes.subtitle} mb="xl">Recent Events</Title>
        </>
    )
}

export default RecentEvents