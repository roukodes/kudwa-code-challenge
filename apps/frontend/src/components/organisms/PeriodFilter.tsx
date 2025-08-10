import { Box, FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material';
import { type ChangeEvent } from 'react';

import useFetchPeriods from '@/hooks/useFetchPeriods';

interface PeriodFilterProps {
  value: { from?: Date; to?: Date };
  onChange: React.Dispatch<
    React.SetStateAction<{
      from?: Date;
      to?: Date;
    }>
  >;
}

function PeriodFilter({ value, onChange }: PeriodFilterProps) {
  const { data, isLoading } = useFetchPeriods();

  const fromDateAsString = value.from?.toISOString();
  const toDateAsString = value.to?.toISOString();

  const mappedPeriods = data?.periods?.map((p) => ({
    ...p,
    startDate: new Date(p.startDate)?.toISOString(),
    endDate: new Date(p.endDate)?.toISOString(),
  }));

  const endPeriods = fromDateAsString
    ? mappedPeriods?.filter((p) => p.startDate >= fromDateAsString)
    : mappedPeriods;

  const handleStartDateChange = (
    e: ChangeEvent<HTMLInputElement> | (Event & { target: { value: string; name: string } }),
  ) => {
    onChange((prev) => ({ ...prev, from: new Date(e.target.value) }));
  };

  const handleEndDateChange = (
    e: ChangeEvent<HTMLInputElement> | (Event & { target: { value: string; name: string } }),
  ) => {
    onChange((prev) => ({ ...prev, to: new Date(e.target.value) }));
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Skeleton variant="rectangular" height={40} width={200} />
        <Skeleton variant="rectangular" height={40} width={200} />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <FormControl size="small" sx={{ minWidth: 200 }}>
        <InputLabel>Start Period</InputLabel>
        <Select label="Start Period" value={fromDateAsString} onChange={handleStartDateChange}>
          {mappedPeriods?.map((p) => (
            <MenuItem key={p.id} value={p.startDate}>
              {p.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 200 }}>
        <InputLabel>End Period</InputLabel>
        <Select label="End Period" value={toDateAsString} onChange={handleEndDateChange}>
          {endPeriods?.map((p) => (
            <MenuItem key={p.id} value={p.endDate}>
              {p.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default PeriodFilter;
