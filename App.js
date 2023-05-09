import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
const App = () => {
  return <StyleComponent />;
};

const StyleComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#81ecec',
          borderWidth: 2,
          borderColor: 'purple',
          marginTop: 20,
          marginLeft: 20,
        }}
      />   
      <View>
        <Image  source={require('./img/')} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  },
  image: {
    width:188,
    height:107
  }
});

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#81ecec'}}></View>
      <Text>
        Hello World!
        <Harwin />
      </Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Harwin = () => {
  return <Text> Agung Harwin</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};
class BoxGreen extends Component {
  render() {
    return <Text>ini class Component</Text>;
  }
}
class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}> ini Hewan</Text>
      </View>
    );
  }
}

export default App;
