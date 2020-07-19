import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Button, Avatar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
export default function App() {
  console.log('debugg-Ui');
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
