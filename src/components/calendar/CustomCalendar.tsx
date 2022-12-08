import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import { Paper } from '@mantine/core';
import { getTheme } from '../../configs/appfunctions';

export function CustomCalendar() {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <Paper p="xs" radius="lg">
      <Calendar
        value={value}
        onChange={setValue}
        fullWidth
        size="xl"
        styles={(theme) => ({
          cell: {
            border: `1px solid ${getTheme(theme) ? theme.colors.dark[4] : theme.colors.gray[2] }`,
            borderRadius: theme.radius.lg
          },
          day: { borderRadius: 10, height: 70, fontSize: theme.fontSizes.lg },
          weekday: { fontSize: theme.fontSizes.lg },
          weekdayCell: {
            fontSize: theme.fontSizes.xl,
            backgroundColor: getTheme(theme) ? theme.colors.dark[5] : theme.colors.gray[0],
            border: `1px solid ${getTheme(theme) ? theme.colors.dark[4] : theme.colors.gray[2]
              }`,
            height: 70,
          },
        })}
      />
    </Paper>
  );
}