import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={require('../assets/image/logo.png')}
      />
      <Text>No logged auth!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 240,
    marginTop: 50,
    marginBottom: 50,
  },
});
