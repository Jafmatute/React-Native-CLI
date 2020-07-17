import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionBar from './ActionBar';
import AddBirthday from './AddBirthday';
import firebase from '../utils/firebase';
import 'firebase/firestore';

firebase.firestore().settings({experimentalForceLongPolling: true});

const db = firebase.firestore(firebase);
export default function ListBirthday(props) {
  const [showList, setShowList] = useState(true);
  const {user} = props;
  const [birthday, setBirthday] = useState([]);
  //console.log('cumpleaños', birthday);
  useEffect(() => {
    setBirthday([]);
    db.collection(user.uid)
      .orderBy('dateBirth', 'asc')
      .get()
      .then((response) => {
        const itemArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          itemArray.push(data);
          //console.log('documento', doc.data());
          //console.log(itemArray);
        });
        setBirthday(itemArray);
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      {showList ? (
        <>
          <Text>List</Text>
        </>
      ) : (
        <AddBirthday user={user} setShowList={setShowList} />
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
});
