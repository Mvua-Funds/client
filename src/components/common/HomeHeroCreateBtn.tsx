import { useMantineTheme, Menu, NavLink, Button } from '@mantine/core';
import { IconCalendarEvent, IconSpeakerphone } from '@tabler/icons';
import React, { useState } from 'react'
import { CustomLinkComponentDropdown } from './CreateDropdown';

function HomeHeroCreateBtn() {
    const [open, setOpen] = useState(false)
    const theme = useMantineTheme()

    return (
        <Menu opened={open} onClose={() => setOpen(false)} shadow="md" width={200} radius="lg"
            withArrow transition="slide-up" offset={13} arrowOffset={20} transitionDuration={200}>
            <Menu.Target>
                <Button onClick={() => setOpen(o => !o)} radius="xl" px="xl" color="purple" variant="outline">
                    Create Event / Campaign
                </Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>SELECT</Menu.Label>
                <CustomLinkComponentDropdown click={() => setOpen(false)} details={{ to: "/create/event", label: "Create Event", icon: <IconCalendarEvent size={18} color="indigo" /> }} />
                <CustomLinkComponentDropdown click={() => setOpen(false)} details={{ to: "/create/campaign", label: "Create Campaign", icon: <IconSpeakerphone size={18} color="green" /> }} />
            </Menu.Dropdown>
        </Menu>
    );
}


export default HomeHeroCreateBtn