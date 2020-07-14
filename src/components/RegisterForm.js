import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function RegisterForm(props) {
  const {changeForm} = props;
  return (
    <View>
      <Text>Register form</Text>
      <TouchableOpacity onPress={changeForm}>
        <Text style={styles.btnText}>Inicio de Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
});
