import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import user from '../../assets/images/user.png';
import Axios from 'axios';

const Item = ({name, email, role, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image source={user} style={styles.userImage} />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descRole}>{role}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('SAVE');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      role,
    };
    if (button === 'SAVE') {
      Axios.post('http://10.0.2.2:3004/users', data);
      setName('');
      setEmail('');
      setRole('');
      getData();
    } else if (button === 'UPDATE') {
      Axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data);
      setName('');
      setEmail('');
      setRole('');
      getData();
      setButton('SAVE');
    }
  };

  const getData = async () => {
    try {
      const response = await Axios.get('http://10.0.2.2:3004/users');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectItem = item => {
    console.log('selected item', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setRole(item.role);
    setButton('UPDATE');
  };

  const deleteItem = item => {
    console.log('deleted item', item);
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`);
    getData();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API</Text>
      <Text style={styles.textTitle}>Masukkan Anggota codinger</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Role"
        style={styles.input}
        value={role}
        onChangeText={value => setRole(value)}
      />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />
      {users.map(user => (
        <Item
          key={user.id}
          name={user.name}
          email={user.email}
          role={user.role}
          onPress={() => selectItem(user)}
          onDelete={() =>
            Alert.alert('Warning', 'Are you sure to delete this data?', [
              {text: 'No', onPress: () => console.log('button NO')},
              {text: 'Yes', onPress: () => deleteItem(user)},
            ])
          }
        /> 
      ))}
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
    color: 'black',
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
    color: 'black',
  },
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  userImage: {width: 80, height: 80, borderRadius: 80},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  desc: {marginLeft: 18, flex: 1},
  descName: {fontSize: 20, fontWeight: 'bold', color: 'black'},
  descEmail: {fontSize: 16, color: 'black'},
  descRole: {fontSize: 12, marginTop: 8, color: 'black'},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});
