import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Home'; // Replace with your Home component
import AddTask from './src/AddTask'; // Replace with your AddTask component
import TaskListScreen from './src/TaskListScreen';
import colors from './src/constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TaskListScreen" component={TaskListScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.brandColor,
            height: 75,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'home';
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'AddTask') {
              iconName = 'add';
            }
            return <Icon name={iconName} size={35} color={'white'} />;
          },
        })}>
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="AddTask" component={AddTask} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
