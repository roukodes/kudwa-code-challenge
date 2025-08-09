import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import { AppBar, Box, Button, IconButton, LinearProgress, Toolbar, Tooltip } from '@mui/material';
import { useIsFetching } from '@tanstack/react-query';
import { useEffect } from 'react';

import ThemeToggler from '@/components/atoms/ThemeToggler';
import useRunETL from '@/hooks/useRunETL';

const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

interface TopBarProps {
  contentWidth: number;
  toggleDrawer: () => void;
}

function TopBar({ toggleDrawer, contentWidth }: TopBarProps) {
  const isFetching = useIsFetching();

  const { runETL, isLoadingETL } = useRunETL();

  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleDrawer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleDrawer]);

  return (
    <AppBar
      elevation={0}
      color="default"
      position="fixed"
      sx={{
        width: contentWidth,
        transition: 'width 200ms ease-out',
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar>
        <Tooltip title={`Toggle drawer (⌘ + ${SIDEBAR_KEYBOARD_SHORTCUT.toUpperCase()})`}>
          <IconButton
            edge="start"
            sx={{ mr: 1 }}
            color="inherit"
            onClick={toggleDrawer}
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Tooltip title="Run ETL">
            <Button
              size="small"
              onClick={runETL}
              variant="contained"
              disabled={isLoadingETL}
              startIcon={isLoadingETL ? <LinearProgress sx={{ width: 16 }} /> : <RefreshIcon />}
            >
              {isLoadingETL ? 'Running…' : 'Run Integration'}
            </Button>
          </Tooltip>

          <ThemeToggler />
        </Box>
      </Toolbar>

      {isFetching ? <LinearProgress /> : null}
    </AppBar>
  );
}

export default TopBar;
