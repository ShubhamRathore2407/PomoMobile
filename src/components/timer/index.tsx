import React, { useEffect, useState } from 'react';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import styles from './styles';
import { palette } from '../../utils/theme/themes';
import { formatTime } from '../../utils/functions/functions';
import { Status, TaskItemProps } from '../../services/models';

interface Props {
  data: TaskItemProps
  setIsPlaying : any
  isPlaying : boolean
  setTimeElapsed : any
  timeElapsed : number 
}

const Timer: React.FC<Props> = ({ data, setIsPlaying, isPlaying, setTimeElapsed, timeElapsed }) => {
  useEffect(() => {
    const handleInterval = () => {
      if (isPlaying) {
        setTimeElapsed(timeElapsed + 1);
      }
    };

    const interval = setInterval(handleInterval, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, timeElapsed]);

  const handlePlayPause = () => {
    setIsPlaying((prevState : boolean) => !prevState);
  };

  const formattedTime = timeElapsed > 0 ? formatTime(timeElapsed) : '00:00:00';

  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={data.status === Status.COMPLETED} onPress={handlePlayPause}>
        <Icon
          style={styles.icon}
          color={isPlaying ? palette.pause : palette.play}
          type={IconType.Ionicons}
          name={isPlaying ? 'pause' : 'play'}
        />
      </TouchableOpacity>
      <Text style={[styles.timer, { color: isPlaying ? palette.pause : palette.play }]}>{formattedTime}</Text>
    </View>
  );
};

export default Timer;
