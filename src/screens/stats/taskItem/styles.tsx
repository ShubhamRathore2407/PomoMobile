import { StyleSheet } from "react-native";
import { palette } from "../../../utils/theme/themes";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  date: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  currentItem: {
    backgroundColor: palette.blackLight,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderBottomWidth:5,
    borderBottomColor:"white"
  },
  detailsContainer: {
    marginTop: 10,
  },
  scheduledItem: {
    backgroundColor: palette.blackLight,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  detailValue: {
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailLabel: {
    color: palette.gray,
    fontWeight: 'bold',
  },
  deleteText: {
    fontWeight: 'bold',
    marginTop: 5,
  },
})