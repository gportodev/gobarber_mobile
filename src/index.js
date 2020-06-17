import React from 'react';
import { StatusBar } from 'react-native';

import Route from '~/routes';

export default function App() {
  console.disableYellowBox = true;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Route />
    </>
  );
}
