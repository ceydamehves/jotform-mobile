import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { createStore } from 'redux';
import allReducers from './screens/reducers';
import { Provider } from 'react-redux';

const store = createStore( 
  allReducers
  );

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </Provider>
    );
  }
}
