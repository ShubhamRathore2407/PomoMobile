import { StyleSheet } from "react-native";
import { palette } from "../../../utils/theme/themes";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: 'black',
        alignItems: "center",
        gap: 12,
        paddingHorizontal: 50,
        paddingVertical: 10,
        marginVertical: 3,
    },
    field: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 4,
    },
    title: {
        color: palette.title,
        fontSize: 14,
    },
    value: {
        color: palette.borderColor,
        fontWeight: 'bold',
        fontSize: 16,
    },
});
