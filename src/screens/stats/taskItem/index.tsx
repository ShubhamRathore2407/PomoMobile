import React from 'react'
import { Text, View } from 'react-native'

import { StatItemProps, Status } from '../../../services/models'

import styles from './styles'
import { palette } from '../../../utils/theme/themes'

interface Props {
  item : StatItemProps
}
const TaskItem:React.FC<Props> = ({item}) => {
  return (
    <View style={[styles.currentItem, {borderBottomColor : item.status === Status.COMPLETED ? palette.green : palette.red}]}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsRow}>
          <Text style={styles.detailLabel}>Expected Time (min):</Text>
          <Text style={styles.detailValue}>{item.expected}</Text>
        </View>
       {item.timeTaken && <View style={styles.detailsRow}>
          <Text style={styles.detailLabel}>Time Taken (min):</Text>
          <Text style={styles.detailValue}>{item.timeTaken}</Text>
        </View>}
        {item.status && <View style={styles.detailsRow}>
          <Text style={styles.detailLabel}>Status:</Text>
          <Text style={styles.detailValue}>{item.status}</Text>
        </View>}
      </View>
    </View>
  )
}

export default TaskItem