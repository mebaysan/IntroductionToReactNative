import React, {useState} from 'react';
import {StyleSheet, View, Alert, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const addGoalHandler = goalValue => {
    if (goalValue === '') {
      Alert.alert('Goal can not be empty!');
    } else if (goals.filter(e => e.goal === goalValue).length > 0) {
      Alert.alert(`There is already a goal with "${goalValue}" name`);
    } else {
      goals.push({goal: goalValue, id: goalValue});
    }
  };

  const deleteGoalHandler = goal => {
    setGoals(goals.filter(e => e.id !== goal.id));
    // Alert.alert(`Goal "${goal.goal}" has been deleted successfully!`);
  };

  const startAddGoalHandler = () => setModalIsVisible(true);

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        onAddGoalHandler={addGoalHandler}
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => {
            return (
              <GoalItem itemData={itemData} onDeleteItem={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#311b6b',
  },

  goalsContainer: {
    flex: 5,
  },
});

export default App;
