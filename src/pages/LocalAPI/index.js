import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';

const LocalAPI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API</Text>
      <Text>Masukkan Anggota codinger</Text>
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Role" style={styles.input} />
      <Button title="SAVE" />
      <View style={styles.line} />
      <View>
        <Image src="" />
        <View> 
          <Text>Name</Text>
          <Text>Email</Text> 
          <Text>Bidang</Text>  
        </View>
      </View>
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
});
