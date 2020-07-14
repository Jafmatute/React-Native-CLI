import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {validateEmail} from '../utils/validations';
import firebase from '../utils/firebase';

export default function LoginForm(props) {
  const {changeForm} = props;
  //console.log(changeForm);
  const login = () => {
    //console.warn('OK');
  };
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Correo Electronico"
        placeholderTextColor="#969696"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={login}>
        <Text style={styles.btnText}>Iniciar Sesiòn </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRegistro} onPress={changeForm}>
        <Text style={styles.btnText}>Registro</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    height: 50,
    color: '#fff',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1e3648',
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 1,
    fontSize: 18,
    borderColor: '#1e3648',
  },
  btnRegistro: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
