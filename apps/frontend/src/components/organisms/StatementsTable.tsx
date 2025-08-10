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

import useStatementsList from '@/hooks/useFetchStatementsList';

const ROWS_PER_PAGE = 10;

export default function StatementsTable() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useStatementsList({
    full: false,
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
    return <Alert severity="error">Failed to load statements. Please try again later.</Alert>;
  }

  if (!data?.items?.length) {
    return <Alert severity="info">No statements found.</Alert>;
  }

  return (
    <Paper sx={{ p: 2, maxHeight: 650, overflow: 'auto' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Statements
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Period</TableCell>
              <TableCell align="right">Gross Profit</TableCell>
              <TableCell align="right">Operating Profit</TableCell>
              <TableCell align="right">Net Profit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.items?.map((s: any) => (
              <TableRow key={s.statement.id}>
                <TableCell>{s.statement.period.label}</TableCell>
                <TableCell align="right">${s.statement.grossProfit?.toLocaleString()}</TableCell>
                <TableCell align="right">
                  ${s.statement.operatingProfit?.toLocaleString()}
                </TableCell>
                <TableCell align="right">${s.statement.netProfit?.toLocaleString()}</TableCell>
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
