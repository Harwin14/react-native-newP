import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StyleComponent from './pages/StyleComponent';
import Layout from './pages/Layout';
import Position from './pages/Position';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StyleComponent /> 
        <Layout /> 
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;
