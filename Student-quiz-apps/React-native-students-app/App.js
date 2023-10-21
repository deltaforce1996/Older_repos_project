import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Root} from 'native-base';

import AppContainer from './Navigation/AppNavigator';


export default function App() {
  return (
    <Root>
    <AppContainer/>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
