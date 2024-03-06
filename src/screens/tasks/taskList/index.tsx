import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import TaskItem from '../taskItem';
import {useRealm} from '@realm/react';
import {Status, TaskItemProps} from '../../../services/models';
import {getTodayTasks} from '../../../utils/functions/functions';
import styles from './styles';

const TaskList = () => {
  const realm = useRealm();
  const [taskList, setTaskList] = useState<any>();
  useEffect(() => {
    const tasks = realm.objects<any>('Task');
    const filteredTasks = getTodayTasks(tasks);

    setTaskList(filteredTasks);
  }, []);

  const handleDeleteTask = (task: TaskItemProps) => {
    realm.write(() => {
      realm.delete(task);
    });
    const tasks = realm.objects<any>('Task');
    const filteredTasks = getTodayTasks(tasks);
    setTaskList(filteredTasks);
  };
  const handleCompleteTask = (task: TaskItemProps, timeTaken: number) => {
    if (task) {
      realm.write(() => {
        task.status = Status.COMPLETED;
        task.timeTaken = timeTaken;
      });
      const tasks = realm.objects<any>('Task');
      const filteredTasks = getTodayTasks(tasks);
      setTaskList(filteredTasks);
    }
  };
  const handleUnDoCompleteTask = (task: TaskItemProps) => {
    if (task) {
      realm.write(() => {
        task.status = Status.PENDING;
      });
      const tasks = realm.objects<any>('Task');
      const filteredTasks = getTodayTasks(tasks);
      setTaskList(filteredTasks);
    }
  };
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={taskList}
        renderItem={({item}) => (
          <TaskItem
            onUndoCompleteTask={handleUnDoCompleteTask}
            onCompleteTask={handleCompleteTask}
            onDeleteTask={handleDeleteTask}
            data={item}
          />
        )}
      />
    </View>
  );
};

export default TaskList;
