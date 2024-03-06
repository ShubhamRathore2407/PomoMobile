// StatsNavigation.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StatsList from "../statsList";
import { brand, palette } from "../../../utils/theme/themes";
import { TaskType } from "../../../services/models";

const Tab = createBottomTabNavigator();

const ScheduledTasks = () => (
  <StatsList type={TaskType.SCHEDULED} />
);

const CurrentTasks = () => (
  <StatsList type={TaskType.CURRENT} />
);

const StatsNavigation = () => {
  return (
    <>
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: brand.primaryMain
        }}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: palette.radium,
          tabBarInactiveTintColor: palette.white,
          tabBarStyle: {
            borderRadius: 75,
            alignItems: 'center', 
            backgroundColor: "transparent",
            borderTopColor: "transparent",
            justifyContent:"center",
            elevation: 10,
            height: 60, 
            width: 330,
            alignSelf: 'center',
          },
          tabBarLabelStyle: {
            borderRadius: 75,
            alignContent:"center",
            justifyContent:"center",
            fontSize: 14,
            backgroundColor:palette.dynamicBlack,
            padding:10,
            paddingLeft:40,
            paddingRight:40,
            fontWeight: "bold",
            letterSpacing:1,
          },
          tabBarItemStyle: {
            marginBottom: 11,
            alignSelf: "center"
          },
          tabBarIcon: () => null,
        }}
      >
        <Tab.Screen name="Current" component={CurrentTasks} />
        <Tab.Screen name="Scheduled" component={ScheduledTasks} />
      </Tab.Navigator>
    </>
  );
};

export default StatsNavigation;
