import {StyleSheet} from 'react-native';
import {brand, palette} from '../../../utils/theme/themes';

export default StyleSheet.create({
  formCard: {
    backgroundColor: palette.black,
    padding: 10,
    width: '100%',
    height: 'auto',
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  saveContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
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
  scheduledText: {
    alignItems: 'center',
    color: palette.title,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: palette.shadow,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: palette.white,
  },
});
