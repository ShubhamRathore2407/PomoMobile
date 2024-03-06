import { StyleSheet } from "react-native";
import { brand, palette } from "../../../utils/theme/themes";

export default StyleSheet.create({
  container: {
    backgroundColor: brand.primaryMainLight,
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 2,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: palette.list,
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  timer : {
    padding: 10
  }
});
