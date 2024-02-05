import { StyleSheet } from "react-native";
import { brand } from "../../../utils/theme/themes";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingVertical: 20,
    },
    imageContainer: {
        alignItems: 'center',
    },
    outerImageContainer: {
        borderRadius: 150,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: brand.secondaryMain,
        padding: 10,
        marginBottom: 10,
    },
    innerImageContainer: {
        borderRadius: 150,
        overflow: 'hidden',
    },
    profileImage: {
        width: 130,
        height: 130,
        resizeMode: 'cover',
    },
});