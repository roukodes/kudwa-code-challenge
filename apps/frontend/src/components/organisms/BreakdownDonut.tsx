import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
  Skeleton,
  Typography,
} from '@mui/material';
import { PieChart } from '@mui/x-charts';
import { useState } from 'react';

import useFetchBreakdown from '@/hooks/useFetchBreakdown';

interface BreakdownDonutProps {
  from?: Date;
  to?: Date;
}

const BREAKDOWN_TYPES = [
  'COGS',
  'REVENUE',
  'OPERATING_REVENUE',
  'NON_OPERATING_REVENUE',
  'OPERATING_EXPENSE',
  'NON_OPERATING_EXPENSE',
] as const;

export default function BreakdownDonut({ from, to }: BreakdownDonutProps) {
  const [type, setType] = useState<(typeof BREAKDOWN_TYPES)[number]>(BREAKDOWN_TYPES[0]);
  const { data, isLoading } = useFetchBreakdown({
    type,
    from,
    to,
  });

  const seriesData =
    data?.categories
      ?.filter((c) => +c.value > 0)
      .map((c) => ({ id: c.id, value: c.value, label: c.name })) ?? [];

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as (typeof BREAKDOWN_TYPES)[number]);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">Breakdown</Typography>
        <FormControl size="small">
          <InputLabel>Type</InputLabel>
          <Select value={type} label="Type" onChange={handleTypeChange}>
            {BREAKDOWN_TYPES.map((t) => (
              <MenuItem key={t} value={t}>
                {t}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {isLoading ? (
        <Skeleton variant="rectangular" height={250} />
      ) : (
        <PieChart
          height={250}
          hideLegend
          series={[
            {
              innerRadius: 60,
              data: seriesData,
            },
          ]}
        />
      )}
    </Paper>
  );
}
