import { Paper, Typography } from '@mui/material';

function KPIStat({ label, value, subtext }: { label: string; value?: string; subtext?: string }) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
      }}
    >
      <Typography variant="subtitle2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="h6" fontWeight={600}>
        {value ?? '-'}
      </Typography>
      {subtext && (
        <Typography variant="caption" color="success.main">
          {subtext}
        </Typography>
      )}
    </Paper>
  );
}

export default KPIStat;
