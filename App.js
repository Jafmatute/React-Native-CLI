import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

//cuando se utliza ROW se alínea con alignItem:"center", sì es con COLUMN se utliza justifyContent
//cuando flexDirection es ROW toma todo el ancho y cuando es column toma la altura usando FLEX:1

const App = () => {
  return (
    <>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
});

export default App;
