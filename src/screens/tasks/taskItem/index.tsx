import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';

import {Status, TaskItemProps} from '../../../services/models';
import WelcomeHeader from '../../../components/welcomeHeader';
import Timer from '../../../components/timer';
import {palette} from '../../../utils/theme/themes';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

import styles from './styles';

interface Props {
  data: TaskItemProps;
  onDeleteTask: any;
  onCompleteTask: any;
  onUndoCompleteTask: any;
}

const TaskItem: React.FC<Props> = ({
  data,
  onDeleteTask,
  onCompleteTask,
  onUndoCompleteTask,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(
    data.timeTaken ? data.timeTaken : 0,
  );
  const {title, description} = data;

  const handleClick = (data: TaskItemProps) => {
    setIsPlaying(false);

    data.status === Status.PENDING
      ? onCompleteTask(data, timeElapsed)
      : onUndoCompleteTask(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <WelcomeHeader
          title={title}
          description={description}
          titleStyles={{
            color: palette.lightGray,
            fontSize: 18,
          }}
          containerStyles={{padding: 0}}
        />
        <View>
          <TouchableOpacity
            onPress={() => onDeleteTask(data)}
            style={styles.actionButton}>
            <Icon
              type={IconType.Ionicons}
              name="trash-outline"
              size={24}
              color={palette.shadow}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleClick(data)}
            style={styles.actionButton}>
            <Icon
              type={IconType.Ionicons}
              name="checkmark-done-circle-outline"
              size={24}
              color={
                data.status === Status.COMPLETED
                  ? palette.radium
                  : palette.white
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.timer}>
        <Timer
          data={data}
          setTimeElapsed={setTimeElapsed}
          timeElapsed={timeElapsed}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
        />
      </View>
    </View>
  );
};

export default TaskItem;
