import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Button, Avatar} from 'react-native-paper';
export default function App() {
  console.log('debugg-Ui');
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Avatar.Text size={24} label="XD" />
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
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
