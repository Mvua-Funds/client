import React from 'react'
import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core'

const CampaignCard = (props:
  { title: string, targetAmt: number, startDate: string, endDate: string }
) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{props.title}</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {props.targetAmt}
      </Text>
      <Grid>
        <Grid.Col span={6}><Text size="sm" color="dimmed">
          {props.startDate}
        </Text></Grid.Col>
        <Grid.Col span={6}><Text size="sm" color="dimmed">
          {props.endDate}
        </Text></Grid.Col>
      </Grid>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Donate
      </Button>
    </Card>
  )
}

export default CampaignCard