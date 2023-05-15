import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import cart from '../../assets/icons/cart.png';

const Cart = props => {
  return (
    <View>
      <View style={styles.cartWrapper}>
        <Image style={styles.iconCart} source={cart} />
          <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
    cartWrapper: {
      borderWidth: 4,
      width: 100,
      height: 100,
      borderRadius: 150 / 2,
      borderColor: '#4398d1',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
  iconCart: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 15,
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
