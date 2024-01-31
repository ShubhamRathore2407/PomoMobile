import {Realm} from '@realm/react';
export class Task extends Realm.Object<Task> {
  title!:string;
  description!: string;
  isCompleted!: boolean; 
  userId!: string;
  constructor(realm: Realm, description: string, title:string, isCompleted: boolean, userId?: string) {
    super(realm, {description, title, isCompleted, userId: userId || '_SYNC_DISABLED_'});
  }  
}