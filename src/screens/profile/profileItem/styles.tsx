import { StyleSheet } from "react-native";
import { fontSize, palette } from "../../../utils/theme/themes";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: 'black',
        alignItems: "center",
        justifyContent:"flex-start",
        gap: 20,
        paddingHorizontal: 50,
        paddingVertical: 5,
        marginVertical: 5,
    },
    field: {
        marginHorizontal: 10,
        marginBottom: 4,
    },
    title: {
        color: palette.title,
        fontSize: fontSize.h4,
    },
    value: {
        color: palette.borderColor,
        fontSize: fontSize.h2,
    },
});
