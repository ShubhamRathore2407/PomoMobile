import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';

import CustomSwipeableRow from '../../../utils/customComponents/CustomSwipeableWrapper';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Status, TaskItemProps} from '../../../services/models';
import WelcomeHeader from '../../../components/welcomeHeader';
import {palette} from '../../../utils/theme/themes';
import Timer from '../../../components/timer';

import styles from './styles';

interface Props {
  data: TaskItemProps;
  setSoftDelete: any;
  onCompleteTask: any;
  onUndoCompleteTask: any;
  setShowUndoNotification: any;
}

const TaskItem: React.FC<Props> = ({
  data,
  setSoftDelete,
  onCompleteTask,
  onUndoCompleteTask,
  setShowUndoNotification,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(
    data.timeTaken ? data.timeTaken : 0,
  );
  const {title, description} = data;

  return (
    <CustomSwipeableRow
      onSwipeLeft={() => {
        onCompleteTask(data, timeElapsed);
      }}
      onSwipeRight={() => {
        setSoftDelete(data, true);
        setShowUndoNotification(true);
      }}>
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
              disabled={data.status === Status.PENDING}
              onPress={() => onUndoCompleteTask(data)}
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
    </CustomSwipeableRow>
  );
};

export default TaskItem;
