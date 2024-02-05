import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../../../components/header'
import Content from '../content'
import styles from './styles'

const TasksScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Content />
    </SafeAreaView>
  )
}

export default TasksScreen
