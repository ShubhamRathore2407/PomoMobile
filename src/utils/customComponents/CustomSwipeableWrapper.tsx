import React, {Component} from 'react';
import {RectButton, Swipeable} from 'react-native-gesture-handler';
import {Animated, StyleSheet, I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

interface SwipeableRowProps {
  children: React.ReactNode;
  onSwipeLeft?: any;
  onSwipeRight?: any;
}

interface SwipeableRowState {
  _swipeableRow?: Swipeable | null;
}

export default class CustomSwipeableRow extends Component<
  SwipeableRowProps,
  SwipeableRowState
> {
  constructor(props: SwipeableRowProps) {
    super(props);
    this.state = {
      _swipeableRow: null,
    };
  }

  renderLeftActions = (progress: any, dragX: any) => {
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <AnimatedIcon
          name="check"
          size={30}
          color="#fff"
          style={[styles.actionIcon]}
        />
      </RectButton>
    );
  };

  renderRightActions = (progress: any, dragX: any) => {
    return (
      <RectButton style={styles.rightAction} onPress={this.close}>
        <AnimatedIcon
          name="delete-forever"
          size={30}
          color="#fff"
          style={[styles.actionIcon]}
        />
      </RectButton>
    );
  };

  updateRef = (ref: Swipeable | null) => {
    this.setState({_swipeableRow: ref});
  };

  close = () => {
    if (this.state._swipeableRow) {
      this.state._swipeableRow.close();
    }
  };

  render() {
    const {children, onSwipeLeft, onSwipeRight} = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        onSwipeableOpen={e => {
          if (e === 'left') {
            try {
              onSwipeLeft();
              this.close();
            } catch (error) {
              console.log(error);
            }
          } else {
            try {
              onSwipeRight();
              this.close();
            } catch (error) {
              console.log(error);
            }
          }
        }}
        leftThreshold={0}
        rightThreshold={41}
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#388e3c',
    marginVertical: 4,
    marginHorizontal: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
  },
  actionIcon: {
    marginHorizontal: 10,
  },
  rightAction: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#dd2c00',
    marginVertical: 4,
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
});
