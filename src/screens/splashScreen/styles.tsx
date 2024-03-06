import {StyleSheet} from 'react-native';
import {brand, palette} from '../../utils/theme/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    letterSpacing:1,
    fontSize: 32,
    fontWeight: '900',
    color: '#fff',
    marginHorizontal: 5,
    fontStyle: 'italic',
    marginVertical:5
  },
  welcome: {
    fontWeight: '400',

  },
  topText:{
    fontSize : 44,
    backgroundColor:brand.secondaryMain,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  smallText1: {
    fontSize: 24,
    color: palette.borderColorDark,
  },
  smallText2: {
    fontSize: 28,
    color: palette.borderColorDark,
  },
  appText: {
    fontSize: 50,
    fontWeight: '400',
    color: brand.secondaryMain,
    fontStyle: 'normal',
    borderWidth:1,
    borderColor: brand.secondaryMain,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical:5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
