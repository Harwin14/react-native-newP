import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import macbook from '../../assets/images/macbook.png';
const Product = (props) => {
  return (
    <View style={styles.card}>
      <Image source={macbook} style={styles.image} />
      <Text style={styles.title}>New Macbook Pen 2023</Text>
      <Text style={styles.price}>Rp 25.000.000-</Text>
      <Text style={styles.address}>Jakarta Barat</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>BELI</Text>
        </View>
      </TouchableOpacity>
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
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  card: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'black',
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2994a',
  },
  address: {
    fontSize: 12,
    fontWeight: 300,
    marginTop: 12,
  },
  textBtn: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#6fcf97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
});
export default Product;
