import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';
export type RootStackParamList = {
  MainScreen: undefined;
  MyTasks: undefined;
  Profile: undefined;
  Stats:undefined;
};

export default function App() {  
  // const {RealmProvider} = TaskRealmContext;    
  return (
    <>
      <Navigation />
    </>
  );
}