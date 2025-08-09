import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { NavLink, useLocation } from 'react-router';

import screenNames from '@/navigation/screenNames';

const items = [
  { to: screenNames.HOME, label: 'Home', icon: <HomeIcon /> },
  { to: screenNames.INSIGHTS, label: 'Insights', icon: <InsightsIcon /> },
];

function SideDrawer() {
  const location = useLocation();

  return (
    <Box role="navigation" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box px={2} py={2}>
        <Typography variant="h6" color="inherit">
          Finance Dashboard
        </Typography>
      </Box>
      <Divider />

      <List sx={{ py: 0 }}>
        {items.map((item) => {
          const selected =
            location.pathname === item.to || location.pathname.startsWith(item.to + '/');
          return (
            <ListItemButton
              key={item.to}
              component={NavLink}
              to={item.to}
              selected={selected}
              sx={{ borderRadius: 2, mx: 1, my: 0.5 }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>

      <Box flexGrow={1} />

      <Box px={2} py={2}>
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Kudwa Code Challenge
        </Typography>
      </Box>
    </Box>
  );
}

export default SideDrawer;
