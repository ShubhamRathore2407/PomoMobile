import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity, Platform} from 'react-native';
import {useRealm} from '@realm/react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

import {
  numberToDayMap,
  numberToMonthMap,
} from '../../../utils/constants/constants';
import {Status, TaskItemProps} from '../../../services/models';
import {palette} from '../../../utils/theme/themes';
import {Task} from '../../../realm/TaskModel';

import styles from './styles';

type Props = {
  setShowForm: any;
};

const Form: React.FC<Props> = ({setShowForm}) => {
  const realm = useRealm();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [targetTime, setTargetTime] = useState<string | null>(null);

  const handleSave = () => {
    const currentDate = new Date();
    const task: TaskItemProps = {
      activeOn: targetDate || currentDate,
      title,
      description,
      targetTime,
      status: Status.PENDING,
    };

    try {
      realm.write(() => {
        realm.create('Task', Task.generate(task));
      });
    } catch (error) {
      console.log(error);
    }
    setShowForm(false);
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(Platform.OS === 'ios');
    setTargetDate(selectedDate || targetDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={styles.formCard}>
      <View style={styles.datePickerButton}>
        <Icon
          onPress={() => setShowForm(false)}
          type={IconType.Ionicons}
          name="close-outline"
          size={26}
          color="gray"
        />
        <View style={styles.saveContainer}>
          <Icon
            onPress={showDatepicker}
            type={IconType.Ionicons}
            name="time-outline"
            size={24}
            color="gray"
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      {targetDate && (
        <Text style={styles.scheduledText}>
          Scheduling on {numberToDayMap[targetDate?.getDay()].substring(0, 3)} ,{' '}
          {numberToMonthMap[targetDate?.getMonth()].substring(0, 3)}{' '}
          {targetDate?.getDate()}
        </Text>
      )}
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={targetDate || new Date()}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={text => setTitle(text)}
        value={title}
        placeholderTextColor={palette.title}
      />
      <TextInput
        style={[styles.input]}
        placeholder="Description"
        onChangeText={text => setDescription(text)}
        value={description}
        multiline
        placeholderTextColor={palette.title}
      />
      <TextInput
        style={styles.input}
        placeholder="Target time (min)"
        onChangeText={text => setTargetTime(text)}
        value={targetTime !== null ? targetTime.toString() : ''}
        placeholderTextColor={palette.title}
        keyboardType="numeric"
      />
    </View>
  );
};

export default Form;
