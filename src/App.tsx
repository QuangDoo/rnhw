import React from 'react';

import ContinentScreen from './screen/ContinentScreen';
import CountryDetailsScreen from './screen/CountryDetailsScreen';
import {HomeScreen} from './screen/HomeScreen';

const App = (props: any): JSX.Element => {
  return (
    <>
      <HomeScreen {...props} />
      <ContinentScreen {...props} />
      <CountryDetailsScreen {...props} />
    </>
  );
};

export default App;
