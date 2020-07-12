import React from 'react';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.box_one}></View>
        <View style={styles.box_two}></View>
        <View style={styles.box_tre}></View>
        <View style={styles.box_four}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    //flexDirection: 'row',
    //flexDirection: 'column',
    //flexDirection: 'column-reverse',
    flexDirection: 'row-reverse',
  },
  box_one: {
    padding: 20,
    backgroundColor: 'blue',
  },
  box_two: {
    padding: 20,
    backgroundColor: 'orange',
  },
  box_tre: {
    padding: 20,
    backgroundColor: 'teal',
  },
  box_four: {
    padding: 20,
    backgroundColor: 'navy',
  },
});

export default App;
