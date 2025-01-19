import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const ListCard = ({data}: {data: []}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.taskContainer}>
        <Text>{data.task_title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  taskContainer: {
    borderColor: colors.brandColor,
    width: 300,
    height: 50,
    borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
