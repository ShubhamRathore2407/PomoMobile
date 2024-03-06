import React, {useEffect, useState} from 'react';
import {isReadyRef, navigationRef} from 'react-navigation-helpers';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {RenderTabNavigation} from '../components/tabNavigation';
import {SCREENS} from '../utils/constants/constants';
import SplashScreen from '../screens/splashScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 4000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      {isSplashVisible ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={SCREENS.MAIN_TASKS}
            component={RenderTabNavigation}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
