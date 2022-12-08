import { Center, Stack, SegmentedControl, Group, Paper, Text, Transition } from '@mantine/core'
import { Calendar, CalendarBase } from '@mantine/dates'
import { IconCalendarEvent, IconSpeakerphone } from '@tabler/icons'
import React from 'react'
import { useState } from 'react';

const HomeBannerCalendar = () => {
    const [activeSegment, setActiveSegment] = useState('events')
    return (
        <Center className='h-100'>
            <Stack className='w-100' my="xl" spacing={16}>
                <SegmentedControl
                    fullWidth
                    radius="xl"
                    color="indigo"
                    onChange={seg => setActiveSegment(seg)}
                    data={[
                        {
                            label: (
                                <Group position='center'>
                                    <IconCalendarEvent />
                                    <Text>Events</Text>
                                </Group>
                            ), value: 'events'
                        },
                        {
                            label: (
                                <Group position='center'>
                                    <IconSpeakerphone />
                                    <Text>Campaigns</Text>
                                </Group>
                            ), value: 'campaigns'
                        },
                    ]}
                />
                <Paper p="xs" radius="lg">
                    {
                        activeSegment === 'events' ? (
                            <Calendar fullWidth month={new Date()} />
                        ) : null
                    }
                    {
                        activeSegment === 'campaigns' ? (
                            <Calendar fullWidth month={new Date(2022, 10, 17)} />
                        ) : null
                    }
                </Paper>
            </Stack>
        </Center>
    )
}

export default HomeBannerCalendar