import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, Easing} from 'react-native';

import HeaderIcon from '../../components/Icons/headerIcon';
import {palette} from '../../utils/theme/themes';

import styles from './styles';

const SplashScreen = () => {
  const iconAnimation = useRef(new Animated.Value(0)).current;
  const textAnimation = useRef(new Animated.Value(0)).current;
  const backgroundAnimation = useRef(new Animated.Value(0)).current;
  const fadeOutAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(iconAnimation, {
      toValue: 1,
      duration: 1300,
      easing: Easing.bounce,
      useNativeDriver: true,
      delay: 850,
    }).start();

    Animated.timing(textAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      delay: 700,
    }).start();

    Animated.timing(backgroundAnimation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeOutAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      delay: 3500,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeOutAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.95],
          }),
          backgroundColor: backgroundAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [palette.iconBlack, palette.black],
          }),
        },
      ]}>
      <Animated.View
        style={[
          styles.content,
          {
            transform: [
              {
                translateY: iconAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-400, 0],
                }),
              },
            ],
          },
        ]}>
        <HeaderIcon size={80} />
      </Animated.View>
      <Animated.View style={[styles.textContainer, {opacity: textAnimation}]}>
        <Text style={[styles.text, styles.topText]}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={[styles.text, styles.smallText1]}> to</Text>
        </Text>
        <View style={styles.row}>
          <Text style={[styles.text, styles.smallText2]}>the</Text>
        </View>
        <Text style={[styles.text, styles.appText]}>PomoApp</Text>
      </Animated.View>
    </Animated.View>
  );
};

export default SplashScreen;
