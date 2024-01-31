import React, { useEffect, useState } from 'react';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import styles from './styles';
import { palette } from '../../utils/theme/themes';

interface Props {
  initialTime: number;
}

const Timer: React.FC<Props> = ({ initialTime }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(initialTime);

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
    setIsPlaying((prevState) => !prevState);
  };

  const formattedTime = timeElapsed > 0 ? formatTime(timeElapsed) : '00:00';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePlayPause}>
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

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default Timer;
