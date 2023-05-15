import {StyleSheet, Image, View, Text, ScrollView} from 'react-native';
import React from 'react';
import macbook from '../../assets/images/macbook.png';
import mb from '../../assets/images/mb.jpg';
import profile from '../../assets/images/profil.jpg';
import cart from '../../assets/icons/cart.png';

const Story = props => {
  return (
    <View style={styles.storyWrapper}>
      <Image source={props.pict} style={styles.image} />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <Story title={'Youtube Channel'} pict={macbook} />
        <Story title={'Instagram Story'} pict={profile} />
        <Story title={'Recomend Videos'} pict={mb} />
        <Story title={'Your Hobby'} pict={profile} />
        <Story title={'My games'} pict={cart} />
        <Story title={'Vacations'} pict={macbook} />
        <Story title={'Time for works'} pict={profile} />
        <Story title={'Family day!'} pict={macbook} />
      </View>
    </ScrollView>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    maxWidth: 70,
  },
storyWrapper:{
    alignItems:'center'
},
  container: {
    flexDirection: 'row',
    marginVertical:20,
    marginHorizontal:2,
    gap:10
  },
});
