import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {Provider as PaperProvider, Avatar} from 'react-native-paper';
export default function App() {
  console.log('debugg-Ui');
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Avatar.Text size={24} label="XD" />
      </SafeAreaView>
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
