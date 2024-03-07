import {StyleSheet} from 'react-native';
import {palette} from '../../../utils/theme/themes';

export default StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: palette.list,
  },
  undoNotification: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  undoNotificationText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
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
