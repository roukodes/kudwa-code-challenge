import { Route, Routes } from 'react-router';

import ErrorBoundary from '@/components/common/ErrorBoundary';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/home/Home';
import Insights from '@/pages/insights/Insights';
import NotFound from '@/pages/not-found/NotFound';

import screenNames from './screenNames';

function MainNavigation() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<Layout />}>
          <Route path={screenNames.HOME} element={<Home />} />
          <Route path={screenNames.INSIGHTS} element={<Insights />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default MainNavigation;
