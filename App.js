import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ExerciseProvider } from './ExerciseContext';
import AddExerciseScreen from './AddExerciseScreen';
import ExerciseHistoryScreen from './ExerciseHistoryScreen';
import SettingsScreen from './SettingsScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ExerciseScreens = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Add Workout') {
            iconName ='add-circle' ;
          } else if (route.name === 'Workout History') {
            iconName = 'list';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Add Workout" component={AddExerciseScreen} />
      <Tab.Screen name="Workout History" component={ExerciseHistoryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <ExerciseProvider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Workout Diary" component={ExerciseScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </ExerciseProvider>
  );
};

export default App;
