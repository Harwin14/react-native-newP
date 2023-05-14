import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StyleComponent from './pages/StyleComponent';
import Layout from './pages/Layout';
import Position from './pages/Position';
import Flexbox from './pages/Flexbox';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StyleComponent /> 
        <Layout /> 
        <Position /> */}
        <Flexbox />
      </ScrollView>
    </View>
  ); 
};

export default App;
