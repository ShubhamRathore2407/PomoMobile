import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';
import { RealmProvider } from '@realm/react';
import { Profile } from './src/realm/ProfileModel';
import { Task } from './src/realm/TaskModel';

export default function App() {  
  return (
    <RealmProvider schema={[Profile, Task]} schemaVersion={13} >
      <Navigation />
    </RealmProvider>
  );
}