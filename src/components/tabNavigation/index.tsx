import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TasksScreen from "../../screens/tasks/mainTasksScreen";
import StatsScreen from "../../screens/stats/mainStatsScreen/index.tsx";
import ProfileScreen from "../../screens/profile/profileScreen";

import { palette } from "../../utils/theme/themes";
import { SCREENS } from "../../utils/constants/constants";
import { renderTabIcon } from "../Icons/tabIcon/index.tsx";

const Tab = createBottomTabNavigator();

export const RenderTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) =>
                    renderTabIcon(route, focused, color, size),
                tabBarActiveTintColor: palette.radium,
                tabBarInactiveTintColor: palette.gray,
                tabBarStyle: {
                    backgroundColor: palette.black,
                    borderTopColor: 'transparent',
                    elevation: 0,
                    paddingBottom: 5,
                    paddingTop: 5,
                    height: 70,
                },
                tabBarItemStyle: {
                    marginBottom:8
                },
                tabBarLabelStyle: {
                    fontSize: 12
                }
            })}
        >
            <Tab.Screen name={SCREENS.TASKS} component={TasksScreen} />
            <Tab.Screen name={SCREENS.STATS} component={StatsScreen} />
            <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
    );
};