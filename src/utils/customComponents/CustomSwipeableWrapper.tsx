import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, View, PanResponder, TouchableOpacity, Text } from 'react-native';

interface CustomSwipeableProps {
  children: React.ReactNode;
  onLeftSwipe?: (data: any) => void;
  onRightSwipe?: (data: any) => void;
  swipeSensitivity?: number;
}

const CustomSwipeableWrapper: React.FC<CustomSwipeableProps> = ({
    children,
    onLeftSwipe,
    onRightSwipe,
    swipeSensitivity,
    // Other props
  }) => {
    const [pan] = useState(new Animated.Value(0));
  
    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: (_, { dx }) => Math.abs(dx) > swipeSensitivity,
        onPanResponderGrant: () => {
          pan.setOffset({ x: pan._value });
          pan.setValue(0);
        },
        onPanResponderMove: (_, { dx }) => {
          pan.setValue(dx);
        },
        onPanResponderRelease: (_, { dx }) => {
          pan.flattenOffset();
          if (dx > swipeSensitivity) {
            onRightSwipe && onRightSwipe(dx);
          } else if (dx < -swipeSensitivity) {
            onLeftSwipe && onLeftSwipe(dx);
          } else {
            Animated.spring(pan, { toValue: 0, useNativeDriver: true }).start();
          }
        },
      })
    ).current;
  
    const animatedStyle = {
      transform: [{ translateX: pan }],
    };
  
    return (
      <View style={styles.container} {...panResponder.panHandlers}>
        <Animated.View style={[styles.swipeableContainer, animatedStyle]}>
          {children}
        </Animated.View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipeableContainer: {
    flex: 1,
  },
  leftButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  rightButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomSwipeableWrapper;
