import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Skeleton,
  Typography,
} from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { useState } from 'react';

import useFetchTrends from '@/hooks/useFetchTrends';

interface TrendsChartProps {
  from?: Date;
  to?: Date;
}

type TrendsChartMetric =
  | 'revenue'
  | 'cogs'
  | 'opex'
  | 'grossProfit'
  | 'operatingProfit'
  | 'netProfit';

export default function TrendsChart({ from, to }: TrendsChartProps) {
  const [metric, setMetric] = useState<TrendsChartMetric>('revenue');

  const { data, isLoading } = useFetchTrends({
    metric,
    from,
    to,
  });

  const handleMetricChange = (e: SelectChangeEvent<TrendsChartMetric>) => {
    setMetric(e.target.value);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">Trends</Typography>
        <FormControl size="small">
          <InputLabel>Metric</InputLabel>
          <Select value={metric} label="Metric" onChange={handleMetricChange}>
            <MenuItem value="revenue">Revenue</MenuItem>
            <MenuItem value="cogs">COGS</MenuItem>
            <MenuItem value="opex">OPEX</MenuItem>
            <MenuItem value="grossProfit">Gross Profit</MenuItem>
            <MenuItem value="operatingProfit">Operating Profit</MenuItem>
            <MenuItem value="netProfit">Net Profit</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {isLoading && <Skeleton variant="rectangular" height={300} />}

      {!isLoading && !!data && (
        <LineChart
          height={300}
          series={[{ data: data.points.map((p) => p.value), label: metric }]}
          xAxis={[{ scaleType: 'band', data: data.points.map((p) => p.label ?? '') }]}
        />
      )}
    </Box>
  );
}
