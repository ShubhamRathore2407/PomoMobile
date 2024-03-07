import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatList, Text, View} from 'react-native';
import {useRealm} from '@realm/react';

import {Status, TaskItemProps} from '../../../services/models';
import {
  getStatusBasedSortedTasks,
  getTodayTasks,
} from '../../../utils/functions/functions';
import TaskItem from '../taskItem';

import styles, {centeredStyles} from './styles';

const TaskList = () => {
  const realm = useRealm();
  const [taskList, setTaskList] = useState<any>([]);
  const [deletedTask, setDeletedTask] = useState<any>();
  const [showUndoNotification, setShowUndoNotification] =
    useState<boolean>(false);

  useEffect(() => {
    const tasks = realm.objects<any>('Task');
    const filteredTasks = getTodayTasks(tasks);

    setTaskList(filteredTasks);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showUndoNotification) {
      timer = setTimeout(() => {
        setShowUndoNotification(false);
        handleDeleteTask(deletedTask);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showUndoNotification]);

  const handleDeleteTask = (task: TaskItemProps) => {
    realm.write(() => {
      realm.delete(task);
    });
    const tasks = realm.objects<any>('Task');
    const filteredTasks = getTodayTasks(tasks);
    setTaskList(filteredTasks);
  };

  const handleSetSoftDelete = (task: TaskItemProps, status: boolean) => {
    if (task) {
      setDeletedTask(task);
      realm.write(() => {
        task.softDeleted = status;
      });
    }
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
  const handleUndo = () => {
    setShowUndoNotification(false);
    handleSetSoftDelete(deletedTask, false);
  };
  const tasks = getStatusBasedSortedTasks(taskList);

  if (taskList?.length === 0) {
    return (
      <View style={centeredStyles.container}>
        <Text style={centeredStyles.text}>Add tasks</Text>
      </View>
    );
  }
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <TaskItem
            onUndoCompleteTask={handleUnDoCompleteTask}
            onCompleteTask={handleCompleteTask}
            setSoftDelete={handleSetSoftDelete}
            setShowUndoNotification={setShowUndoNotification}
            data={item}
          />
        )}
      />
      {showUndoNotification && (
        <TouchableOpacity style={styles.undoNotification} onPress={handleUndo}>
          <Text style={styles.undoNotificationText}>Undo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskList;
