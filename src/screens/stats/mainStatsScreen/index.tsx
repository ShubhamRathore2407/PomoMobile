import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../../../components/header'
import Content from '../content'
import styles from '../styles'

const StatsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Content />
    </SafeAreaView>
  )
}

export default StatsScreen