import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { palette } from "../../utils/theme/themes"
interface Style {
    container?: ViewStyle;
    descriptionTextStyle?: TextStyle;
    contentContainer?: ViewStyle;
    languageContainer?: ViewStyle;
    languageColorStyle?: ViewStyle;
    starContainer?: ViewStyle;
    valueTextStyle?: TextStyle;
    forkContainer?: ViewStyle;
    listContainer?: ViewStyle;
    taskItem?: ViewStyle
    topContainer?:ViewStyle
    topContainerIcons?: ViewStyle
}

export default () => {
    return StyleSheet.create<Style>({
        container: {
            flex: 1,
            alignItems: "center",
        },
        header: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
        },
        profilePicImageStyle: {
            height: 50,
            width: 50,
            borderRadius: 30,
        },
        contentContainer: {
            flex: 1,
        },
        languageContainer: {
            flexDirection: "row",
            alignItems: "center",
        },
        valueTextStyle: {
            marginLeft: 8,
        },
        taskItem: {
            borderBottomWidth: 0.3,
            borderColor: palette.borderColor,
            padding: 15,
            borderRadius: 10,
            flexDirection: 'column',
            flex: 1,
            overflow: 'hidden',
        },
        topContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center"
        },
        topContainerIcons : {
            gap:15,
        }
    })
}