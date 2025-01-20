import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {FlatList} from 'react-native';
import ListCard from './components/ListCard';
import Header from './components/Header';
import ModelBox from './components/ModelBox';

const TaskListScreen = ({route}) => {
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [task_title, setTask_title] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [id, setId] = useState('');

  const handleEditButton = (
    task_Id: string,
    title: string,
    category: string,
    description: string,
  ) => {
    setId(task_Id);
    setCategory(category);
    setDescription(description);
    setTask_title(title);
    setIsEditVisible(!isEditVisible);
  };
  // console.log('iddd', id,description,category,task_title);
  const updateTask = async (
    Id: any,
    descriptionType: any,
    categoryType: any,
    title: any,
  ) => {
    const body = {
      task_id: Id,
      task_title: title,
      description: descriptionType,
      category: categoryType,
    };

    try {
      const response = await axios.put(
        'https://do-it-backend.onrender.com/task',
        {
          task_id: Id,
          task_title: task_title,
          description: description,
          category: category,
        },
      );
      console.log(response.data);
      if (response.status === 200) {
        setIsEditVisible(false);
      }
    } catch (error) {
      // console.log(error);
    }
  };
  const {tasks} = route.params;
  const renderItem = ({item}: {item: []}) => {
    return (
      <ListCard
        props={item}
        handleEditButton={handleEditButton}
        updateTask={updateTask}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<Header name={'Tasks'} />}
      />
      <ModelBox
        isVisible={isEditVisible}
        setIsEditVisible={setIsEditVisible}
        data={undefined}
        title={task_title}
        setTitle={setTask_title}
        description={description}
        setDescription={setDescription}
        category={category}
        setCategory={setCategory}
        updateTask={updateTask}
        id={id}
      />
    </View>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({});
