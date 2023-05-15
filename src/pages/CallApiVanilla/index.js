import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });
  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {
    // getDatas();
    // addData();
  }, []);

  //CALL API Method GET
  const getDatas = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => setDataUser(json.data));
  };

  //CALL API Method POST
  // console.log('data object', dataForAPI);
  // console.log('data stringify:', JSON.stringify(dataForAPI));
  const addData = () => {
    const dataForAPI = {
      name: 'Morpheus',
      job: 'leader',
    };
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
        console.log('post response', json);
        setDataJob(json)
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API Vanilla</Text>
      <Button title="GET DATA" onPress={getDatas} />
      <Text>Response GET DATA</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>Email: {dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={addData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 50},
});
