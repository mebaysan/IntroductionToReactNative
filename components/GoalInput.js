import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
const GoalInput = ({onAddGoalHandler, modalIsVisible, setModalIsVisible}) => {
  const [goalValue, setGoalValue] = useState('');
  const goalInputHandler = e => {
    setGoalValue(e);
  };
  const addGoalHandler = () => {
    onAddGoalHandler(goalValue);
    setGoalValue('');
  };
  return (
    <Modal visible={modalIsVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={setModalIsVisible.bind(this, false)}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#311b6b',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    width: '100%',
    height: 50,
    backgroundColor: '#e4d0ff',
    marginRight: 8,
    padding: 16,
    borderRadius: 6,
    color: '#120438',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
export default GoalInput;
