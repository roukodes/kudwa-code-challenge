import { Box, Drawer, Toolbar, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router';

import SideDrawer from '@/components/layout/SideDrawer';
import { DRAWER_WIDTH } from '@/utils/sizing';

import TopBar from './TopBar';

function Layout() {
  const isMobile = useMediaQuery('(max-width:900px)');

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const drawerDisplayXs = isMobile ? 'block' : 'none';
  const drawerDisplayMd = isMobile ? 'none' : 'block';
  const drawerType = isMobile ? 'temporary' : 'persistent';

  const drawerWidth = isDrawerOpen && !isMobile ? DRAWER_WIDTH : 0;
  const contentWidth = isMobile ? window.innerWidth : window.innerWidth - drawerWidth;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Side nav */}
      <Box
        component="nav"
        aria-label="sidebar"
        sx={{ width: drawerWidth, transition: 'width 200ms linear' }}
      >
        <Drawer
          open={isDrawerOpen}
          variant={drawerType}
          ModalProps={{ onClick: toggleDrawer }}
          sx={{
            display: { xs: drawerDisplayXs, md: drawerDisplayMd },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
          }}
        >
          <SideDrawer />
        </Drawer>
      </Box>

      <Box sx={{ flex: 1 }}>
        {/* Top app bar */}
        <TopBar contentWidth={contentWidth} toggleDrawer={toggleDrawer} />

        {/* Main content */}
        <Box component="main" sx={{ p: 3, maxWidth: contentWidth }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
