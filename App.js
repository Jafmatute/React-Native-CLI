import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';
import firebase from './src/utils/firebase';
import 'firebase/auth';

export default function App() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      //console.log('Usuario Logged:', response);
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;
  return (
    <SafeAreaView>
      {user ? <Text>Logged</Text> : <Text>Not Logged</Text>}
    </SafeAreaView>
  );
}
