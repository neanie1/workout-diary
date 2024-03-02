import React from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import { useExerciseContext } from './ExerciseContext';
import style from './style';

const ExerciseHistoryScreen = () => {
  const { exercises, clearExerciseHistory, unit } = useExerciseContext();

  const sportTypeDistances = exercises.reduce((totals, exercise) => {
    if (!totals[exercise.sportType]) {
      totals[exercise.sportType] = 0;
    }
    totals[exercise.sportType] += exercise.distance;
    return totals;
  }, {});

  const renderExerciseItem = ({ item }) => (
    <View style={style.historycontainer}>
      <Text style={style.historytext}>{item.date}</Text>
      <Text style={style.historytext}>{item.sportType}</Text>
      <Text style={style.historytext}>
        Distance: {unit === 'miles' ? (item.distance * 0.621371).toFixed(2) : item.distance.toFixed(2)} {unit}
      </Text>
      <Text style={style.historytext}>Duration: {item.duration} minutes </Text>
    </View>
  );

  const handleClearExerciseHistory = () => {
    Alert.alert(
      'Clear Workout History',
      'Are you sure you want to clear your workout history?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => clearExerciseHistory(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={style.historycontainer}>
      {exercises.length > 0 ? (
        <>
          {Object.entries(sportTypeDistances).map(([sportType, distance]) => (
            <View key={sportType} style={style.sumbox}>
              <Text>
                {sportType}: {unit === 'miles' ? (distance * 0.621371).toFixed(2) : distance.toFixed(2)} {unit}
              </Text>
            </View>
          ))}
          <FlatList
            data={exercises}
            renderItem={renderExerciseItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <Button title="Clear" onPress={handleClearExerciseHistory} />
        </>
      ) : (
        <Text style={style.text}>No saved workouts yet.</Text>
      )}
    </View>
  );
};

export default ExerciseHistoryScreen;
