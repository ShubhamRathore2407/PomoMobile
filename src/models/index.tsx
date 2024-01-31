import {createRealmContext} from '@realm/react';
import {Task} from './Task/Task';
export const TaskRealmContext = createRealmContext({
  schema: [Task]  
});