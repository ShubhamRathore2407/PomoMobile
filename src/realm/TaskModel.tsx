import Realm, {BSON, ObjectSchema} from 'realm';

import {Status, TaskItemProps} from '../services/models';

export class Task extends Realm.Object<Task> {
  _id!: BSON.ObjectId;
  title!: string;
  activeOn!: Date;
  description!: string;
  status!: Status | Status.PENDING;
  targetTime!: string | null;

  static generate(task: TaskItemProps) {
    return {
      _id: new Realm.BSON.ObjectId(),
      title: task.title,
      description: task?.description,
      targetTime: task.targetTime,
      status: task.status,
      timeTaken: 0,
      activeOn: task.activeOn,
    };
  }

  static schema: ObjectSchema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      title: 'string',
      activeOn: 'date',
      status: 'string?',
      targetTime: 'string',
      timeTaken: 'int',
      description: 'string',
    },
  };
}
