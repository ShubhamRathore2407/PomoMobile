import {
  GroupTasksByDateProps,
  TaskItemProps,
  TaskType,
} from '../../services/models';

export const groupTasksByDate = (tasks: TaskItemProps[]) => {
  const groupedData: GroupTasksByDateProps[] = [];
  tasks.forEach(task => {
    const existingGroup = groupedData.find(
      group => group.date.getDate() === task.activeOn.getDate(),
    );
    if (existingGroup) {
      existingGroup.tasks.push(task);
    } else {
      groupedData.push({date: task.activeOn, tasks: [task]});
    }
  });
  return groupedData;
};

export const getTodayTasks = (tasks: Realm.Results<TaskItemProps>) => {
  const today = new Date();
  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const endOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
  );
  const todayTasks = tasks.filtered(
    `activeOn >= $0 AND activeOn < $1`,
    startOfDay,
    endOfDay,
  );
  return todayTasks;
};

export const getFutureTasks = (tasks: Realm.Results<TaskItemProps>) => {
  const today = new Date();
  const endOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
  );
  const FutureTasks = tasks.filtered(`activeOn >= $0 `, endOfDay);
  return FutureTasks;
};

export const getPastTasks = (tasks: Realm.Results<TaskItemProps>) => {
  const today = new Date();
  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const pastTasks = tasks.filtered(`activeOn < $0 `, startOfDay);
  return pastTasks;
};
export const filterOutFutureTasks = (tasks: Realm.Results<TaskItemProps>) => {
  const today = new Date();
  const endOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
  );

  const pastAndPresentTasks = tasks.filtered(`activeOn <= $0 `, endOfDay);

  return pastAndPresentTasks;
};

export const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const sortBasedOnTaskType = (
  type: TaskType,
  data: GroupTasksByDateProps[],
) => {
  return type === TaskType.CURRENT
    ? data.sort((a, b) => b.date.getTime() - a.date.getTime())
    : data.sort((a, b) => a.date.getTime() - b.date.getTime());
};
