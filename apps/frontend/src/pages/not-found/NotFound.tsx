import { Button, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';

export default function NotFound() {
  return (
    <Stack spacing={2} alignItems="flex-start">
      <Typography variant="h5" fontWeight={700}>
        404 — Page not found
      </Typography>
      <Typography color="text.secondary">
        The page you are looking for doesn’t exist or may have been moved.
      </Typography>
      <Button variant="contained" component={RouterLink} to="/">
        Go to Home
      </Button>
    </Stack>
  );
}
