import React from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';

import { groupTasksByDate } from '../../../utils/functions/functions';
import { StatItemProps, TaskType } from '../../../services/models';
import Lists from '../Mock/mockData';
import TaskItem from '../taskItem';
import styles from './styles';

interface Props {
  type: TaskType
}

const StatsList: React.FC<Props> = ({ type }) => {
  const data: StatItemProps[] = type === TaskType.CURRENT ? Lists.currentTasks as unknown as StatItemProps[] : Lists.scheduledTasks as unknown as StatItemProps[];

  const groupedData = groupTasksByDate(data);

  return (
    <ScrollView style={styles.container}>
      {groupedData.map((group) => (
        <View key={group.date}>
          <Text style={styles.date}>{group.date}</Text>
          {type === TaskType.SCHEDULED ? (
            <FlatList
              data={group.tasks}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TaskItem item={item} />
              )}
              scrollEnabled={false}
            />
          ) : type === TaskType.CURRENT ? (
            <FlatList
              data={group.tasks}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TaskItem item={item} />
              )}
              scrollEnabled={false}
            />
          ) : (
            <Text>Invalid type</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default StatsList;
