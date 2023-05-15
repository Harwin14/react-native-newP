import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Cart from '../../components/Cart';
import Product from '../../components/Product'
const Communication = () => {
    const [totalProduct, setTotalProduct] = useState(2)
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Communication of Components</Text>
      <Cart quantity={totalProduct}/>
      <Product onButtonPress={()=> setTotalProduct(totalProduct+1)}/>
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {textAlign: 'center'},
});
