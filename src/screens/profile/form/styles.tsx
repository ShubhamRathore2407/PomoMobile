import {StyleSheet} from 'react-native';
import {brand, palette} from '../../../utils/theme/themes';

export default StyleSheet.create({
  formCard: {
    backgroundColor: palette.black,
    padding: 10,
    width: '100%',
    height: 'auto',
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: palette.shadow,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: palette.white,
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: brand.secondaryMain,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: palette.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
});
