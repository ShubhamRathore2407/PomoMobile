import { StyleSheet } from "react-native";
import { palette } from "../../../utils/theme/themes";

export default StyleSheet.create({
    listContainer: {
        flex: 1,
        marginTop: 20,
        backgroundColor: palette.list
    },
})
export const centeredStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    text: {
      fontSize: 18,
      color: '#757575',
    },
  });