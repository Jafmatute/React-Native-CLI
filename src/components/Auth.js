import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const changeForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={require('../assets/image/logo.png')}
      />
      {isLogin ? (
        <LoginForm changeForm={changeForm} />
      ) : (
        <RegisterForm changeForm={changeForm} />
      )}
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
