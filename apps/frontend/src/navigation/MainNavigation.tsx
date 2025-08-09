import { Route, Routes } from 'react-router';

import Home from '@/pages/home/Home';
import Insights from '@/pages/insights/Insights';

import screenNames from './screenNames';

function MainNavigation() {
  //   TODO: handle 404
  //   TODO: add error boundary
  return (
    <Routes>
      <Route path={screenNames.HOME} element={<Home />} />
      <Route path={screenNames.INSIGHTS} element={<Insights />} />
    </Routes>
  );
}

export default MainNavigation;
