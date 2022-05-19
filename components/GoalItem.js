import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const GoalItem = ({itemData, onDeleteItem}) => {
  //   const onPressDeleteItem = () => {
  //     onDeleteItem(itemData.item);
  //   };
  /*
   * We can use `bind` instead of creating a new function
   */
  return (
    <Pressable
      onPress={onDeleteItem.bind(this, itemData.item)}
      android_ripple={{color: '#210644'}}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.goal}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});

export default GoalItem;
