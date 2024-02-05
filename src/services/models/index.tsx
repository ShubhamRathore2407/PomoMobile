export interface TaskItemProps {
  name: string;
  description: string;
  language: string;
}
export enum Status {
  COMPLETED = "Completed",
  PENDING = "Pending",
  INPROGRESS = "InProgress",
}
export interface StatItemProps {
  id: string,
  title: string,
  activeOn: string,
  status?: Status,
  expected: number,
  timeTaken?: number
}
export enum TaskType {
  CURRENT = "CurrentTasks",
  SCHEDULED = "ScheduledTasks"
}

export interface GroupTasksByDateProps {
  tasks: StatItemProps[],
  date: string
}