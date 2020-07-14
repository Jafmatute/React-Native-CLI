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
  const [formError, setFormError] = useState({});
  const [userData, setUserData] = useState({});
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });
  //console.log(changeForm);
  const login = () => {
    let errors = {};
    if (!formData.email || !formData.password) {
      if (!formData.email) errors.email = true;
      if (!formData.email) errors.password = true;
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
    } else if (formData.password.length < 6) {
      errors.password = true;
    } else {
      //console.warn('Logged!');
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then((response) => {
          setUserData(response);
          console.log('Informaciòn del usuario:', response);
        })
        .catch((error) => {
          setFormError({
            email: true,
            password: true,
          });
          console.log('Inicio de sesión con firebase:', error);
        });
    }
    setFormError(errors);
    //console.log(errors);
  };

  return (
    <>
      <TextInput
        style={[styles.input, formError.email && styles.errorInput]}
        placeholder="Correo Electronico"
        placeholderTextColor="#969696"
        onChange={(e) => setformData({...formData, email: e.nativeEvent.text})}
      />

      <TextInput
        style={[styles.input, formError.password && styles.errorInput]}
        placeholder="Contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
        onChange={(e) =>
          setformData({...formData, password: e.nativeEvent.text})
        }
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
  errorInput: {
    borderColor: '#940c0c',
  },
});
