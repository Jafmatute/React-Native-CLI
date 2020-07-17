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
export default function AddBirthday() {
  const [isDatePickerVisible, setIsDataPickerVisible] = useState(false);
  const [formData, setFormData] = useState({});
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
    console.log('datos del formulario', formData);
  };
  const showDatePicker = () => {
    setIsDataPickerVisible(true);
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#969696"
          onChange={(e) => onChange(e, 'name')}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="#969696"
          onChange={(e) => onChange(e, 'lastname')}
        />
        <View style={[styles.input, styles.datePicker]}>
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
