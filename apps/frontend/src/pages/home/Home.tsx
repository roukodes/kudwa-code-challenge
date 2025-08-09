import { Link } from 'react-router';

import screenNames from '@/navigation/screenNames';

const Home = () => {
  return (
    <div>
      <Link to={screenNames.INSIGHTS}>Go to Insights</Link>
    </div>
  );
};

export default Home;
