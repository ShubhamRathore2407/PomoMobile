import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { SCREENS } from "../../../utils/constants/constants";

export const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
) => {
    let iconName = "tasks";
    switch (route.name) {
        case SCREENS.TASKS:
            iconName = focused ? "file-tray-stacked" : "file-tray-stacked-outline";
            break;
        case SCREENS.SEARCH:
            iconName = focused ? "search" : "search-outline";
            break;
        case SCREENS.STATS:
            iconName = focused ? "stats-chart" : "stats-chart-outline";
            break;
        case SCREENS.PROFILE:
            iconName = focused ? "person" : "person-outline";
            break;
        default:
            iconName = focused ? "home" : "home-outline";
            break;
    }
    return (
        <Icon
            name={iconName}
            type={IconType.Ionicons}
            size={size}
            color={color}
        />
    );
};