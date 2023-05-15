import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavascript = () => {
  const name = 'Agung Harwin';
  let age = 25;
  const isBoy = true;

  const pet = {
    name: 'Pusspuss',
    anima: 'cat',
    age: 2,
    isLocal: true,
    color: 'yellow',
    parents: {
      male: 'Kaisar',
      Female: 'Queen',
    },
  };
  const peopleNames = ['brando', 'james', 'edward', 'usep'];
  const helloPet = objectPet => {
    // let result = ''
    // if(objectPet.name == 'Miauw') {
    //     result = 'Hello miauw, How are you?'
    // }else{
    //     result = "who's pet?"
    // }
    // return result
    return objectPet.name === 'Miauw'
      ? 'Hello miauw, How are you?'
      : "who's pet?";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>BasicJavascript</Text>
      <Text>{name}</Text>
      <Text>{helloPet(pet)}</Text>
      
        {peopleNames.map((item , index) => (
          <Text>{index+1}. {item}</Text>
        ))}
      
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
