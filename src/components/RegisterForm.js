import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';

export default function RegisterForm(props) {
  const {changeForm} = props;
  const [formData, setFormData] = useState(defaultForm);
  //console.log(formData);
  const register = () => {
    console.log(formData);
  };
  const changeFormRegister = (e, value) => {
    setFormData({
      ...formData,
      [value]: e.nativeEvent.text,
    });
  };
  return (
    <>
      <TextInput
        placeholder="Correo Electronico"
        placeholderTextColor="#969697"
        onChange={(e) => changeFormRegister(e, 'email')}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        placeholderTextColor="#969697"
        onChange={(e) => changeFormRegister(e, 'password')}
        style={styles.input}
      />
      <TextInput
        placeholder="Repetir Contraseña"
        secureTextEntry={true}
        placeholderTextColor="#969697"
        onChange={(e) => changeFormRegister(e, 'confirmPassword')}
        style={styles.input}
      />
      <TouchableOpacity onPress={register}>
        <Text style={styles.btnText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnlogin} onPress={changeForm}>
        <Text style={styles.btnText}>Inicio de Sesión</Text>
      </TouchableOpacity>
    </>
  );
}
function defaultForm() {
  return {
    email: '',
    password: '',
    confirmPassword: '',
  };
}
const styles = StyleSheet.create({
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
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  btnlogin: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
