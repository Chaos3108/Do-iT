import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {FlatList} from 'react-native';
import ListCard from './components/ListCard';
import Header from './components/Header';

const TaskListScreen = ({route}) => {
  const {tasks} = route.params;
  const renderItem = ({item}: {item: []}) => {
    return <ListCard data={item} />;
  };

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<Header name={'Tasks'} />}
      />
    </View>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({});
