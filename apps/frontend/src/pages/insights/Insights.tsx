import { Box, Grid } from '@mui/material';
import { useState } from 'react';

import BreakdownDonut from '@/components/organisms/BreakdownDonut';
import HealthSnapshotRow from '@/components/organisms/HealthSnapshotRow';
import PeriodFilter from '@/components/organisms/PeriodFilter';
import StatementsTable from '@/components/organisms/StatementsTable';
import SummaryTable from '@/components/organisms/SummaryTable';
import TopCategoriesCard from '@/components/organisms/TopCategoriesCard';
import TrendsChart from '@/components/organisms/TrendsChart';

function Insights() {
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({
    from: undefined,
    to: undefined,
  });

  // TODO: improve use the currency of the report

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <PeriodFilter value={dateRange} onChange={setDateRange} />
      </Box>

      <Box sx={{ mb: 4 }}>
        <HealthSnapshotRow from={dateRange.from} to={dateRange.to} />
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <TrendsChart from={dateRange.from} to={dateRange.to} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TopCategoriesCard from={dateRange.from} to={dateRange.to} />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <SummaryTable from={dateRange.from} to={dateRange.to} />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <StatementsTable />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <BreakdownDonut from={dateRange.from} to={dateRange.to} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Insights;
