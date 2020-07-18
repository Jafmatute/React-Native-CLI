import React, {useState, useEffect} from 'react';
import {StyleSheet, Alert, View, ScrollView} from 'react-native';
import moment from 'moment';
import ActionBar from './ActionBar';
import Birthday from './Birthday';
import AddBirthday from './AddBirthday';
import firebase from '../utils/firebase';
import 'firebase/firestore';

firebase.firestore().settings({experimentalForceLongPolling: true});

const db = firebase.firestore(firebase);
export default function ListBirthday(props) {
  const [showList, setShowList] = useState(true);
  const {user} = props;
  const [birthday, setBirthday] = useState([]);
  const [pasatBirthday, setPasatBirthday] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  //console.log('cumpleaños', birthday);
  useEffect(() => {
    setBirthday([]);
    setPasatBirthday([]);
    db.collection(user.uid)
      .orderBy('dateBirth', 'asc')
      .get()
      .then((response) => {
        const itemArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          itemArray.push(data);
        });
        formatDate(itemArray);
      })
      .catch((error) => {
        console.log(error);
      });
    setReloadData(false);
  }, [reloadData]);

  const formatDate = (items) => {
    const currentDate = moment().set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });
    const birthdayTempArray = [];
    const pasatBirthdayTempArray = [];
    items.forEach((item) => {
      //console.log(item);
      const dateBirth = new Date(item.dateBirth.seconds * 1000); //fecha actual del cumpleaños que nos llega.
      const dateBirthday = moment(dateBirth); //creado el objeto fecha con moment
      const currentYear = moment().get('year'); //obteniendo la fecha actual AÑO
      dateBirthday.set({year: currentYear}); //lo actualizamos a la fecha del cumpleaños

      const diffDate = currentDate.diff(dateBirthday, 'days'); //diferenciar fecha que llega a la actual del cumpleaños
      //console.log('diferencia', diffDate);
      const itemTemp = item; //cuando se modifique propiedades se usa CONSTANTES y si se modifca un valor se declara como variable LET
      itemTemp.dateBirth = dateBirthday;
      itemTemp.days = diffDate;
      if (diffDate <= 0) {
        birthdayTempArray.push(itemTemp);
      } else {
        pasatBirthdayTempArray.push(itemTemp);
      }
    });
    setBirthday(birthdayTempArray);
    setPasatBirthday(pasatBirthdayTempArray);
  };

  const deleteBirthday = (birthday) => {
    Alert.alert(
      'Eliminar Cumpleaños',
      `Estas seguro de eliminar el cumpleaños de: ${birthday.name} ${birthday.lastname}`,
      [
        {text: 'Cancelar', style: 'cancel'},
        {
          text: 'Eliminar',
          onPress: () => {
            //console.log('Eliminando....');
            db.collection(user.uid)
              .doc(birthday.id)
              .delete()
              .then(() => {
                setReloadData(true);
              })
              .catch((error) => {
                console.warn(
                  'Ocurrio un error eliminando el cumpleaños de firebase',
                );
              });
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.container}>
      {showList ? (
        <>
          <ScrollView style={styles.scrollview}>
            {birthday.map((item, index) => (
              <Birthday
                key={index}
                birthday={item}
                deleteBirthday={deleteBirthday}
              />
            ))}
            {pasatBirthday.map((item, index) => (
              <Birthday
                key={index}
                birthday={item}
                deleteBirthday={deleteBirthday}
              />
            ))}
          </ScrollView>
        </>
      ) : (
        <AddBirthday
          user={user}
          setShowList={setShowList}
          setReloadData={setReloadData}
        />
      )}

      <ActionBar showList={showList} setShowList={setShowList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
  scrollview: {
    marginBottom: 50,
    width: '100%',
  },
});
