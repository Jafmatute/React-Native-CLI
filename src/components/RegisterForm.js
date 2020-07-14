import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import {validateEmail} from '../utils/validations';
import firebase from '../utils/firebase';
export default function RegisterForm(props) {
  const {changeForm} = props;
  const [formData, setFormData] = useState(defaultForm);
  const [formError, setFormError] = useState({});
  //console.log(formData);
  const register = () => {
    let errors = {};
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
      if (!formData.confirmPassword) errors.confirmPassword = true;
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
    } else if (formData.password !== formData.confirmPassword) {
      errors.password = true;
      errors.confirmPassword = true;
    } else if (formData.password.length < 6) {
      errors.password = true;
      errors.confirmPassword = true;
    } else {
      //console.warn('Form corrrect!');
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((response) => {
          //console.log('Respuesta', response);
        })
        .catch((error) => {
          setFormError({
            email: true,
            password: true,
            confirmPassword: true,
          });
          console.log('Firebase create user', error);
        });
    }
    //console.log(errors);
    setFormError(errors);
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
        style={[styles.input, formError.email && styles.errorInput]}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        placeholderTextColor="#969697"
        onChange={(e) => changeFormRegister(e, 'password')}
        style={[styles.input, formError.password && styles.errorInput]}
      />
      <TextInput
        placeholder="Repetir Contraseña"
        secureTextEntry={true}
        placeholderTextColor="#969697"
        onChange={(e) => changeFormRegister(e, 'confirmPassword')}
        style={[styles.input, formError.confirmPassword && styles.errorInput]}
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
  errorInput: {
    borderColor: '#940c0c',
  },
});
