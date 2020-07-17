import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionBar from './ActionBar';
import AddBirthday from './AddBirthday';
export default function ListBirthday(props) {
  const [showList, setShowList] = useState(true);
  const {user} = props;
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
