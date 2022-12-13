import React from 'react'
import CampaignCard from './CampaignCard';
import { Box, Button, Container, Grid, Group, Stack, Text, Title, useMantineTheme, Image, SegmentedControl, Paper, Center } from '@mantine/core';
import { useState } from 'react'

const Campaign = () => {
  const [campaigns, setcampaigns] = useState([{
    id: 1,
    title: "Kisii tree planting",
    targetAmt: 1000,
    startDate: "23/09/2023",
    endDate: "30/09/2022"
  }, {
    id: 2,
    title: "Borehole Drilling",
    targetAmt: 200,
    startDate: "15/12/2022",
    endDate: "20/12/2022"
  }, {
    id: 3,
    title: "Food Taken",
    targetAmt: 300,
    startDate: "4/02/2023",
    endDate: "16/02/2023"
  }])
  interface campaignTypes { id: number; title: string; targetAmt: number; startDate: string; endDate: string; };
  return (
    <>
      <h1>Recent Events</h1>
      <Grid>
        {campaigns.map(campaign => (<Grid.Col span={4}><CampaignCard title={campaign.title} targetAmt={campaign.targetAmt} startDate={campaign.startDate} endDate={campaign.endDate} /></Grid.Col>))}
      </Grid>
    </>
  )
}

export default Campaign