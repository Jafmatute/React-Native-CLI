import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import firebase from './src/utils/firebase';
import 'firebase/auth';
import Auth from './src/components/Auth';
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
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        {user ? <Text>Logged</Text> : <Auth />}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15212b',
    height: '100%',
  },
});
