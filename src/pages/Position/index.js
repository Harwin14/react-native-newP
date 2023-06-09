import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import cart from '../../assets/icons/cart.png';

export default function Position() {
  return (
    <View style={styles.container}>
      <View style={styles.cartWrapper}>
        <Image style={styles.iconCart} source={cart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 500,
  },
  iconCart: {
    width: 150,
    height: 120,
  },
  cartWrapper: {
    borderWidth: 4,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#4398d1',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontSize: 24,
    color: '#777777',
    fontWeight: '700',
    marginTop: 8,
  },
  notif: {
    fontSize: 13,
    color: 'white',
    fontWeight: '700',
    backgroundColor: '#6fcf97',
    padding:6,
    borderRadius: 35 / 2,
    paddingHorizontal: 10,
    width: 35,
    height: 35,
    position: 'absolute',
    textAlign:'center',
    top: 0,
    right: 0,
  },
});
