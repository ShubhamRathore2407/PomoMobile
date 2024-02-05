import { GroupTasksByDateProps, StatItemProps,  } from "../../services/models";

export const groupTasksByDate = (tasks: StatItemProps[]) => {
    const groupedData: GroupTasksByDateProps[] = [];
    tasks.forEach((task) => {
      const existingGroup = groupedData.find((group) => group.date === task.activeOn);
      if (existingGroup) {
        existingGroup.tasks.push(task);
      } else {
        groupedData.push({ date: task.activeOn, tasks: [task] });
      }
    });
    return groupedData;
  };