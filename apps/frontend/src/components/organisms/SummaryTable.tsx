import {
  Alert,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import useFetchStatementsSummary from '@/hooks/useFetchStatementsSummary';

interface SummaryTableProps {
  from?: Date;
  to?: Date;
}

const ROWS_PER_PAGE = 10;

export default function SummaryTable({ from, to }: SummaryTableProps) {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useFetchStatementsSummary({
    from,
    to,
    limit: ROWS_PER_PAGE,
    cursor: page * ROWS_PER_PAGE,
  });

  const handleOnPageChange = (_: unknown, newPage: number) => {
    setPage(newPage + 1);
  };

  if (isLoading) {
    return <Skeleton variant="rectangular" height={200} />;
  }

  if (isError) {
    return <Alert severity="error">Failed to load summary. Please try again later.</Alert>;
  }

  if (!data?.rows?.length) {
    return <Alert severity="info">No data available for the selected period.</Alert>;
  }

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Summary Table
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Period</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">COGS</TableCell>
              <TableCell align="right">OPEX</TableCell>
              <TableCell align="right">Gross Profit</TableCell>
              <TableCell align="right">Operating Profit</TableCell>
              <TableCell align="right">Net Profit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.rows?.map((row: any) => (
              <TableRow key={row.periodId}>
                <TableCell>{row.label}</TableCell>
                <TableCell align="right">${row.revenue.toLocaleString()}</TableCell>
                <TableCell align="right">${row.cogs.toLocaleString()}</TableCell>
                <TableCell align="right">${row.opex.toLocaleString()}</TableCell>
                <TableCell align="right">${row.grossProfit.toLocaleString()}</TableCell>
                <TableCell align="right">${row.operatingProfit.toLocaleString()}</TableCell>
                <TableCell align="right">${row.netProfit.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        page={page - 1}
        rowsPerPage={ROWS_PER_PAGE}
        onPageChange={handleOnPageChange}
        rowsPerPageOptions={[ROWS_PER_PAGE]}
        count={data?.nextCursor ? -1 : page * ROWS_PER_PAGE}
      />
    </Paper>
  );
}
