import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios';

const CallAPIAxios = () => {
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

  //CALL API Method GET
  const getDatas = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users/3');
      setDataUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //CALL API Method POST 
  const addData = async () => {
    const dataForAPI = {
      name: 'Morpheus',
      job: 'leader',
    };
    try {
      const response = await axios.post(
        'https://reqres.in/api/users',
        dataForAPI,
      );
      console.log(response);
      setDataJob(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API Axios</Text>
      <Button title="GET DATA" onPress={getDatas} />
      <Text>Response GET DATA</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
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

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 50},
});
