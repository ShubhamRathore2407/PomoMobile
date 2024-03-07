import React from 'react';
import {RealmProvider} from '@realm/react';
import 'react-native-gesture-handler';

import {Profile} from './src/realm/ProfileModel';
import {Task} from './src/realm/TaskModel';
import Navigation from './src/navigation';

export default function App() {
  return (
    <RealmProvider schema={[Profile, Task]} schemaVersion={14}>
      <Navigation />
    </RealmProvider>
  );
}
