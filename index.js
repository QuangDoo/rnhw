import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import client from '~/apolloClient';
import ContinentScreen from '~/screen/ContinentScreen';
import CountryDetailsScreen from '~/screen/CountryDetailsScreen';
import {HomeScreen} from '~/screen/HomeScreen';

Navigation.registerComponent(
  `Home`,
  () => props => (
    <ApolloProvider client={client}>
      <HomeScreen {...props} />
    </ApolloProvider>
  ),
  () => HomeScreen,
);

Navigation.registerComponent(
  `CountryDetails`,
  () => props => (
    <ApolloProvider client={client}>
      <CountryDetailsScreen {...props} />
    </ApolloProvider>
  ),
  () => CountryDetailsScreen,
);

Navigation.registerComponent(
  `Continent`,
  () => props => (
    <ApolloProvider client={client}>
      <ContinentScreen {...props} />
    </ApolloProvider>
  ),
  () => CountryDetailsScreen,
);

/* I tried to solve this issue - wrapp ApplloProvider around RootStack but I could not solve that. Please show me some solutions. Thanh you */

// Navigation.registerComponent(
//   `App`,
//   () => props => (
//     <ApolloProvider client={client}>
//       <App {...props} />
//     </ApolloProvider>
//   ),
//   () => App,
// );

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
