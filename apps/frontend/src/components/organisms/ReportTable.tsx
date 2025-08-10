import type { GetReportTreeResponse } from '@kudwa-code-challenge/types';
import {
  Alert,
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import ReportTableRow from '@/components/molecules/ReportTableRow';

interface ReportTableProps {
  isLoading: boolean;
  isError?: boolean;
  currency?: string | null;
  reportDetails?: GetReportTreeResponse;
}

function ReportTable({ isLoading, isError, reportDetails, currency }: ReportTableProps) {
  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" gap={1}>
        <CircularProgress size={20} />
        <Typography>Loading…</Typography>
      </Box>
    );
  }

  if (isError) {
    return <Alert severity="error">Failed to load the report. Please try again later.</Alert>;
  }

  if (!reportDetails?.nodes?.length) {
    return (
      <Alert severity="info">
        No reports available. Run the integration to generate a P&L report.
      </Alert>
    );
  }

  const { columns, nodes } = reportDetails;

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', overflow: 'auto' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>Account</TableCell>
            {columns.map((c) => (
              <TableCell key={c.key} align="right" sx={{ whiteSpace: 'nowrap' }}>
                {c.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {nodes.map((root) => (
            <ReportTableRow
              depth={0}
              node={root}
              columns={columns}
              currency={currency}
              key={root.accountId}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReportTable;
