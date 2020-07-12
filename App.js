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
    flexDirection: 'row',
    //justifyContent: 'flex-end' alinear del lado derecho,
    //justifyContent: 'flex-start', default
    //justifyContent: 'center' alinea en el centro,
    //justifyContent: 'space-between' generar un espacio entre todos,
    //justifyContent: 'space-evenly' el mismos espacio que hay entre uno y otro es el mismo espacio que se va tener de izquierda a derecha,
    justifyContent: 'space-around', //se distribuye con el mismo espacio al anterior de izquiera a derecha pero con espacio entre ambos,

    //ALINEAR
    //alignItems: 'flex-start' alinea arriba,
    //alignItems: 'flex-end' alinea abajo,
    //alignItems: 'strech' default,
    alignItems: 'center',
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
