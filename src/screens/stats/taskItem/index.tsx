import { Text, View } from 'react-native'

import { Status, TaskItemProps } from '../../../services/models'
import { palette } from '../../../utils/theme/themes'

import styles from './styles'

interface Props {
  item : TaskItemProps
}
const TaskItem:React.FC<Props> = ({item}) => {
  return (
    <View style={[styles.currentItem, {borderBottomColor : item.status === Status.COMPLETED ? palette.green : palette.red}]}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsRow}>
          <Text style={styles.detailLabel}>Target Time (min):</Text>
          <Text style={styles.detailValue}>{item.targetTime}</Text>
        </View>
        {item.status === Status.COMPLETED && <View style={styles.detailsRow}>
          <Text style={styles.detailLabel}>Time Taken (min):</Text>
          <Text style={styles.detailValue}>{Math.round((item.timeTaken ?? 0) / 60)}</Text>
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