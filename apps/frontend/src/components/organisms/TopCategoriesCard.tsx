import type { TopCategoriesQueryType } from '@kudwa-code-challenge/validators';
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
import { useState } from 'react';

import useTopCategories from '@/hooks/useFetchTopCategories';

interface TopCategoriesCardProps {
  from?: Date;
  to?: Date;
}

const TOP_CATEGORIES_LIMIT = 3;

export default function TopCategoriesCard({ from, to }: TopCategoriesCardProps) {
  const [type, setType] = useState<TopCategoriesQueryType['type']>('REVENUE');
  const { data, isLoading } = useTopCategories({
    to,
    type,
    from,
    limit: TOP_CATEGORIES_LIMIT,
  });

  const handleTypeChange = (e: SelectChangeEvent<TopCategoriesQueryType['type']>) => {
    setType(e.target.value);
  };

  return (
    <Paper sx={{ p: 3, height: 365 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">Top Categories</Typography>
        <FormControl size="small">
          <InputLabel>Type</InputLabel>
          <Select value={type} label="Type" onChange={handleTypeChange}>
            <MenuItem key="COGS" value="COGS">
              COGS
            </MenuItem>
            <MenuItem key="REVENUE" value="REVENUE">
              REVENUE
            </MenuItem>
            <MenuItem key="OPERATING_REVENUE" value="OPERATING_REVENUE">
              OPERATING REVENUE
            </MenuItem>
            <MenuItem key="NON_OPERATING_REVENUE" value="NON_OPERATING_REVENUE">
              NON OPERATING REVENUE
            </MenuItem>
            <MenuItem key="OPERATING_EXPENSE" value="OPERATING_EXPENSE">
              OPERATING EXPENSE
            </MenuItem>
            <MenuItem key="NON_OPERATING_EXPENSE" value="NON_OPERATING_EXPENSE">
              NON OPERATING EXPENSE
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      {isLoading ? (
        <Skeleton variant="rectangular" height={200} />
      ) : (
        data?.categories?.map((cat) => (
          <Box key={cat.id} sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
            <Typography>{cat.name}</Typography>
            <Typography>${cat.totalValue?.toLocaleString()}</Typography>
          </Box>
        ))
      )}
    </Paper>
  );
}
