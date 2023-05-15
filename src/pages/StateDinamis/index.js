import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState, Component} from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  const plus = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };
  const minus = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
    alert('Number less than 1');
  };
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Add" onPress={plus} />
      <Button title="Min" onPress={minus} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="Add"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
        {/* <Button title="Min" onPress={minus} /> */}
      </View>
    );
  }
}
export default function StateDinamis() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.titleSection}>
        State Dinamis Functional component (Hooks)
      </Text>
      <Counter />
      <Counter />

      <Text style={styles.titleSection}>State Dinamis Class Component </Text>
      <CounterClass />
      <CounterClass />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  titleSection: {
    marginTop: 20,
  },
});
