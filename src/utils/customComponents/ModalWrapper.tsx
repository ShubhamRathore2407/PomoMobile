import React, {useRef, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {fontSize} from '../theme/themes';

interface ModalProps {
  isVisible: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  title?: string | number;
}

const ModalWrapper: React.FC<ModalProps> = ({
  isVisible,
  children,
  onClose,
  title,
}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    if (isVisible) {
      pan.setValue({x: 0, y: 0});
    }
  }, [isVisible]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dy: pan.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 50) {
        onClose?.();
      } else {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.modalContent,
            {
              transform: [{translateY: pan.y}],
            },
          ]}>
          <BlurView style={styles.blurView} blurType="dark" blurAmount={5} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    height: 'auto',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 18,
  },
  titleContainer: {
    height: 50,
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: fontSize.h3,
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default ModalWrapper;
