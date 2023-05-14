import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Flexbox extends Component {
  constructor(props){
    super(props)
    console.log('==>>>constructor');
  }
  render() {
    return (
      <View style={{flexDirection:'row',borderColor:'#c8d6e5',justifyContent:'space-between'}}>
        <View style={{backgroundColor:'#ee5253', flex:1,height:50}}/>
        <View style={{backgroundColor:'#feca57', flex:1,height:50}}/>
        <View style={{backgroundColor:'#1dd1a1', flex:1,height:50}}/>
        <View style={{backgroundColor:'#5f27cd', flex:1,height:50}}/>
      </View>
    );  
  }
} 

export default Flexbox;
