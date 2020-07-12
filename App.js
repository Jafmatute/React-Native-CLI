import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';

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

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>¿Qué hacer en paris ?</Text>
        <ScrollView horizontal={true}>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad1.jpg')}
            />
          </View>

          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad2.jpg')}
            />
          </View>

          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad3.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad4.jpg')}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 250,
    marginRight: 10,
  },
});

export default App;
