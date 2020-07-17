import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import firebase from '../utils/firebase';
import 'firebase/firestore';
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);
export default function AddBirthday(props) {
  const [isDatePickerVisible, setIsDataPickerVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const {user, setShowList} = props;

  //console.log(formData);
  const hiddeDatePicker = () => {
    setIsDataPickerVisible(false);
  };

  const handleConfirm = (date) => {
    //console.log(moment(date).format('LL'));
    const dateBirth = date;
    dateBirth.setHours(0);
    dateBirth.setMinutes(0);
    dateBirth.setSeconds(0);

    setFormData({
      ...formData,
      dateBirth,
    });

    hiddeDatePicker();
  };

  const onChange = (e, type) => {
    setFormData({
      ...formData,
      [type]: e.nativeEvent.text,
    });
  };

  const onSubmit = () => {
    let errors = {};
    if (!formData.name || !formData.lastname || !formData.dateBirth) {
      if (!formData.name) errors.name = true;
      if (!formData.lastname) errors.lastname = true;
      if (!formData.dateBirth) errors.dateBirth = true;

      //console.log('errors:', errors);
    } else {
      //console.log('guardar cumpleaños');
      const data = formData;
      data.dateBirth.setYear(0);
      db.collection(user.uid)
        .add(data)
        .then(() => {
          console.log('OK');
          setShowList(true);
        })
        .catch(() => {
          setFormErrors({name: true, lastname: true, dateBirth: true});
        });
    }
    setFormErrors(errors);
  };
  const showDatePicker = () => {
    setIsDataPickerVisible(true);
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={[styles.input, formErrors.name && {borderColor: '#940c0c'}]}
          placeholder="Nombre"
          placeholderTextColor="#969696"
          onChange={(e) => onChange(e, 'name')}
        />
        <TextInput
          style={[
            styles.input,
            formErrors.lastname && {borderColor: '#940c0c'},
          ]}
          placeholder="Apellido"
          placeholderTextColor="#969696"
          onChange={(e) => onChange(e, 'lastname')}
        />
        <View
          style={[
            styles.input,
            styles.datePicker,
            formErrors.dateBirth && {borderColor: '#940c0c'},
          ]}>
          <Text
            onPress={showDatePicker}
            style={{
              color: formData.dateBirth ? '#fff' : '#969696',
              fontSize: 18,
            }}>
            {formData.dateBirth
              ? moment(formData.dateBirth).format('LL')
              : 'Fecha de Nacimiento'}
          </Text>
        </View>
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.addButtom}>Crear cumpleaños</Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onCancel={hiddeDatePicker}
        onConfirm={handleConfirm}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    color: '#fff',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1e3040',
    paddingHorizontal: 20,
    //paddingRight: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1e3040',
    borderRadius: 50,
  },
  datePicker: {
    justifyContent: 'center',
  },
  addButtom: {
    fontSize: 18,
    color: '#fff',
  },
});
