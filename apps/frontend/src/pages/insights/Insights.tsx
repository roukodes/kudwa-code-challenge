import { Link } from 'react-router';

import screenNames from '@/navigation/screenNames';

function Insights() {
  return (
    <div>
      <Link to={screenNames.HOME}>Go to Home</Link>
    </div>
  );
}

export default Insights;
