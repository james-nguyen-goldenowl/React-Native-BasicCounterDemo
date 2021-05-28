import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import {add, sub} from './actions';
const Counter = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  const counter = useSelector(state => state.counter);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.title}>{counter}</Text>
      <View style={styles.button}>
        <Button
          onPress={() => dispatch(add(parseInt(number, 10)))}
          title="Increase"
          color="blue"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Input value"
          onChangeText={text => setNumber(text)}
          value={number.toString()}
          keyboardType="numeric"
        />
        <Button
          onPress={() => dispatch(sub(parseInt(number, 10)))}
          title="Decrease"
          color="red"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  button: {
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  textInput: {
    height: 40,
    margin: 15,
    borderWidth: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 42,
  },
});
export default Counter;
