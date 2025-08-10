import { Box, Grid, Skeleton, Typography } from '@mui/material';

import KPIStat from '@/components/molecules/KPIStat';
import useStatementsSummary from '@/hooks/useFetchStatementsSummary';

interface HealthSnapshotRowProps {
  from?: Date;
  to?: Date;
}

function HealthSnapshotRow({ from, to }: HealthSnapshotRowProps) {
  const { data, isLoading } = useStatementsSummary({
    from,
    to,
  });

  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {[1, 2, 3, 4].map((i) => (
          <Grid key={i} size={{ xs: 6, md: 3 }}>
            <Skeleton variant="rectangular" height={100} />
          </Grid>
        ))}
      </Grid>
    );
  }

  const hasData = !!data?.rows?.length;

  if (!hasData) {
    return null;
  }

  const lastRow = data.rows[data.rows.length - 1];
  if (!lastRow) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h6">Latest Health Snapshot</Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 3 }}>
          <KPIStat label="Revenue" value={`$${lastRow.revenue.toLocaleString()}`} />
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <KPIStat label="Gross Profit" value={`$${lastRow.grossProfit.toLocaleString()}`} />
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <KPIStat
            label="Operating Profit"
            value={`$${lastRow.operatingProfit.toLocaleString()}`}
          />
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <KPIStat label="Net Profit" value={`$${lastRow.netProfit.toLocaleString()}`} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HealthSnapshotRow;
