import type { ReportsDTO } from '@kudwa-code-challenge/types';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Chip, CircularProgress, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { useMemo } from 'react';

import { invalidateQueries } from '@/clients/query.client';
import ReportTable from '@/components/organisms/ReportTable';
import useFetchReportById from '@/hooks/useFetchReportById';
import useFetchReports from '@/hooks/useFetchReports';
import QUERY_KEYS from '@/services/queryKeys';
import { dateToLabel } from '@/utils/helpers';

function Home() {
  const {
    data: reports,
    isError: isErrorReports,
    isLoading: isLoadingReports,
    isRefetching: isRefetchingReports,
  } = useFetchReports();

  // We are filtering out to the latest report
  const {
    id: reportId,
    name: reportName,
    // TODO: check if report basis is needed
    // basis: reportBasis,
    currency: reportCurrency,
    endPeriod: reportPeriodEnd,
    startPeriod: reportPeriodStart,
  } = useMemo(() => reports?.[0] ?? ({} as ReportsDTO), [reports]);

  const {
    data: reportDetails,
    isError: isErrorReportById,
    isLoading: isLoadingReportById,
    isRefetching: isRefetchingReportById,
  } = useFetchReportById({
    id: reportId,
  });

  const handleRefresh = () => {
    invalidateQueries(QUERY_KEYS.REPORTS.LIST);
    invalidateQueries(QUERY_KEYS.REPORTS.BY_ID(reportId));
  };

  const isError = isErrorReports || isErrorReportById;
  const isLoading = isLoadingReports || isLoadingReportById;
  const isRefetching = isRefetchingReports || isRefetchingReportById;
  const isScreenLoading = isLoading || isRefetching;

  return (
    <Stack spacing={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          {isScreenLoading ? <CircularProgress size={16} /> : null}

          {!!reportName && <Typography variant="h5">{reportName}</Typography>}
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          {!isLoading && (
            <Tooltip title="Refresh">
              <span>
                <IconButton onClick={handleRefresh} disabled={isRefetching}>
                  <RefreshIcon fontSize="small" />
                </IconButton>
              </span>
            </Tooltip>
          )}

          {!!reportPeriodStart && (
            <Chip
              size="small"
              label={`${dateToLabel(reportPeriodStart)}${reportPeriodEnd ? ` → ${dateToLabel(reportPeriodEnd)}` : ''}`}
            />
          )}
        </Stack>
      </Stack>

      <ReportTable
        isError={isError}
        currency={reportCurrency}
        isLoading={isScreenLoading}
        reportDetails={reportDetails}
      />
    </Stack>
  );
}

export default Home;
