import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './components/SampleComponent';
import StyleComponent from './components/StyleComponent';
import Layout from './components/Layout';



const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StyleComponent /> */}
        <Layout />
      </ScrollView>
    </View>
  );
};

export default App;
