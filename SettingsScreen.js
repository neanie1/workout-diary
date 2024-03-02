import React from 'react';
import { View, Text} from 'react-native';
import { useExerciseContext } from './ExerciseContext';
import { RadioButton } from 'react-native-paper';
import style from './style';

const SettingsScreen = () => {
  const { unit, setUnit } = useExerciseContext();

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <View style={style.historycontainer}>
      <Text style={style.text} > Choose Unit: </Text>
      <View style={style.button}>
        <RadioButton
          value="kilometers"
          status={unit === 'kilometers' ? 'checked' : 'unchecked'}
          onPress={() => handleUnitChange('kilometers')}
        />
        <Text> Kilometers </Text>
      </View>
      <View style={style.button}>
        <RadioButton
          value="miles"
          status={unit === 'miles' ? 'checked' : 'unchecked'}
          onPress={() => handleUnitChange('miles')}
        />
        <Text>Miles</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
