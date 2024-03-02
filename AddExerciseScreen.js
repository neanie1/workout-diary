import React, { useState } from 'react';
import { View, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native'; 
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { useExerciseContext } from './ExerciseContext';
import { SegmentedButtons, Button as PaperButton, TextInput } from 'react-native-paper'; 
import style from './style';

const AddExerciseScreen = () => {
  const navigation = useNavigation();
  const { addExercise, unit } = useExerciseContext();
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAddExercise = () => {
    const convertedDistance = unit === 'miles' ? parseFloat(distance) * 1.60934 : parseFloat(distance); 
    if (!sportType || !distance || !duration || !selectedDate) {
      alert('Fill in all fields');
      return;
    }

    const exercise = {
      sportType,
      distance: convertedDistance,
      duration: parseFloat(duration),
      date: selectedDate.toLocaleDateString(),
    };

    addExercise(exercise);
    navigation.navigate('Workout History'); 
  };

  const showDatePicker = () => {
    setDateModalVisible(true);
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate === undefined) {
      setDateModalVisible(false);
    } else {
      setSelectedDate(selectedDate || new Date());
      setDateModalVisible(false); 
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={style.container}>
        <SegmentedButtons
          style={style.segmented}
          value={sportType}
          onValueChange={setSportType}
          buttons={[
            {
              value: 'Walking',
              label: 'Walking',
              icon: 'walk',
              uncheckedColor: '#ffffff',
              showSelectedCheck: '#ffffff'
            },
            {
              value: 'Cycling',
              label: 'Cycling',
              icon: 'bike',
              uncheckedColor: '#ffffff',
              showSelectedCheck: '#ffffff'
            },
            {
              value: 'Swimming',
              label: 'Swimming',
              icon: 'swim',
              uncheckedColor: '#ffffff',
              showSelectedCheck: '#ffffff'
            },
          ]}
        />

        <TextInput
          style={style.inputs}
          label={'Distance (' + unit + ')'} 
          mode='outlined'
          value={distance}
          onChangeText={setDistance}
          keyboardType="numeric"
        />

        <TextInput
          style={style.inputs}
          label={'Duration (minutes)'}
          mode='outlined'
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
        />

        <PaperButton style={style.paperbutton} mode="contained-tonal" onPress={showDatePicker}> Select Date </PaperButton>

        <Modal
          animationType="slide"
          transparent={true}
          visible={dateModalVisible}
          onRequestClose={() => setDateModalVisible(false)}
        >
          <View >
            <DateTimePicker
              style={style.calendar}
              value={selectedDate || new Date()}
              mode="date"
              display="inline"
              onChange={handleDateChange}
            />
          </View>
        </Modal>

        <PaperButton style={style.paperbutton} mode="contained-tonal" onPress={handleAddExercise}> Add Workout </PaperButton>
        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddExerciseScreen;
