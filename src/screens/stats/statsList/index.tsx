import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';

import {
  filterOutFutureTasks,
  getFutureTasks,
  groupTasksByDate,
  sortBasedOnTaskType,
} from '../../../utils/functions/functions';
import {GroupTasksByDateProps, TaskType} from '../../../services/models';
import TaskItem from '../taskItem';
import styles from './styles';
import {useRealm} from '@realm/react';
import {centeredStyles} from '../content/styles';

interface Props {
  type: TaskType;
}

const StatsList: React.FC<Props> = ({type}) => {
  const realm = useRealm();
  const formatDateOrToday = (date: Date) => {
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    return isToday
      ? 'Today'
      : `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
  };
  const [groupedData, setGroupedData] = useState<GroupTasksByDateProps[]>([]);

  useEffect(() => {
    const listener = () => {
      const tasks = realm.objects<any>('Task');
      let filteredTasks: any;

      if (type === TaskType.CURRENT) {
        filteredTasks = filterOutFutureTasks(tasks);
      } else {
        filteredTasks = getFutureTasks(tasks);
      }
      const data = groupTasksByDate(filteredTasks);
      const sortedData = sortBasedOnTaskType(type, data);

      setGroupedData(sortedData);
    };

    realm.objects<any>('Task').addListener(listener);

    return () => realm.objects<any>('Task').removeListener(listener);
  }, [realm, type]);

  if (groupedData.length === 0) {
    return (
      <View style={centeredStyles.container}>
        <Text style={centeredStyles.text}>
          {type === TaskType.SCHEDULED
            ? 'No scheduled tasks'
            : 'No Current Tasks'}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {groupedData.map((group, index) => (
        <View key={index}>
          <Text style={styles.date}>{formatDateOrToday(group.date)}</Text>
          <FlatList
            data={group.tasks}
            keyExtractor={(item: any) => item._id}
            renderItem={({item}) => <TaskItem item={item} />}
            scrollEnabled={false}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default StatsList;
