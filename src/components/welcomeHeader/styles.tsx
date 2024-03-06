import { StyleSheet, ViewStyle } from "react-native";

interface Props {
    container: ViewStyle;
    button: ViewStyle;
    buttonText: ViewStyle;
}

export default StyleSheet.create<Props>({
    container: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding : 15,
    },
    button: {
        borderColor: "black",
        borderRadius: 8,
        padding: 5,
    },
    buttonText: {
        shadowColor: "blue",
    }
});
