import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';

const ListCard = ({props, handleEditButton, updateTask}: any) => {
  const {task_title, _id, category, description} = props;
  // console.log(props._id);
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.taskContainer, styles.elevation]}>
        <Icon
          onPress={() => {
            console.log('editt');
          }}
          style={styles.checkbox}
          name="check-box-outline-blank"
          size={25}
        />
        <Text style={styles.taskText}>{task_title}</Text>
        <Icon
          onPress={() =>
            handleEditButton(_id, task_title, category, description)
          }
          name="edit"
          size={25}
        />
      </View>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: colors.white,
  },
  elevation: {
    elevation: 4,
    shadowColor: colors.brandColor,
  },
  taskContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 50,
    width: 300,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  taskText: {
    width: 200,
    textAlign: 'center',
  },
  checkbox: {
    marginLeft: 10,
  },
});
