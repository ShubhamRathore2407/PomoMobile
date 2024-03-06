export interface TaskItemProps {
  _id?: string;
  title: string;
  activeOn: Date;
  status?: Status;
  targetTime: string | null;
  description?: string;
  timeTaken?: number;
}

export interface ProfileProps {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  image?: string;
}
export enum Status {
  COMPLETED = 'Completed',
  PENDING = 'Pending',
  INPROGRESS = 'InProgress',
}

export enum TaskType {
  CURRENT = 'CurrentTasks',
  SCHEDULED = 'ScheduledTasks',
}

export interface GroupTasksByDateProps {
  tasks: TaskItemProps[];
  date: Date;
}
