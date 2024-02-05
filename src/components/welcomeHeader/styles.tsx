import { StyleSheet, ViewStyle } from "react-native";
import { palette } from "../../utils/theme/themes";

interface Props {
    container: ViewStyle;
    button: ViewStyle;
    buttonText: ViewStyle;
    icon:ViewStyle
}

export default StyleSheet.create<Props>({
    container: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        borderColor: "black",
        padding: 5,
    },
    buttonText: {
        shadowColor: "blue",
    },
    icon: {
        padding:4,
        // backgroundColor:palette.borderColor,
        // borderRadius:8,
    },
});
