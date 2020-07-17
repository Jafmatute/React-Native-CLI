import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
export default function AddBirthday() {
  const [isDatePickerVisible, setIsDataPickerVisible] = useState(false);

  const hiddeDatePicker = () => {
    setIsDataPickerVisible(false);
  };

  const handleConfirm = (date) => {
    console.log(date);
    hiddeDatePicker();
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
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="#969696"
        />
        <View style={[styles.input, styles.datePicker]}>
          <Text onPress={showDatePicker} style={styles.textDate}>
            Fecha de Nacimiento
          </Text>
        </View>
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
  textDate: {
    color: '#969696',
    fontSize: 18,
  },
});
