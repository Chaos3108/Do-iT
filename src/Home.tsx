import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from './constants/colors';
import HomeImage from '../assets/Home.png';
import Todo from '../assets/todo.png';
import Completed from '../assets/completed.png';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const handleTasksToDo = async () => {
    const data = await getTasksist();
    navigation.navigate('TaskListScreen', {tasks: data});
  };
  const getTasksist = async () => {
    try {
      const response = await axios.get(
        'https://do-it-backend.onrender.com/task',
      );
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.titleText}>Dianne Russell</Text>
          <Text style={styles.headerText}>My Tasks</Text>
        </View>
        <Image source={HomeImage} style={{width: 50, height: 50}} />
      </View>

      <View>
        <TouchableOpacity
          onPress={handleTasksToDo}
          style={[styles.taskContainer, styles.elevation]}>
          <Image source={Todo} style={{width: 170, height: 105, margin: 20}} />

          <Text style={styles.tasksText}>Tasks to do</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.taskContainer, styles.elevation]}>
          <Image
            source={Completed}
            style={{width: 152, height: 125, margin: 15}}
          />
          <Text style={styles.tasksText}>Tasks completed</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.createTaskButton, styles.elevation]}>
        <Text style={styles.buttonText}>Create Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 40,
  },

  titleText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.textPlaceHolder,
  },
  imageContainer: {},
  headerText: {
    color: colors.brandColor,
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
  },
  taskContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 200,
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },
  createTaskButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 340,
    height: 55,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginTop: 40,
  },

  buttonText: {
    color: colors.brandColor,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  elevation: {
    elevation: 10,
    shadowColor: colors.brandColor,
  },
  tasksText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    color: colors.brandColor,
  },
});
