import {View} from 'react-native';

import WelcomeHeader from '../../../components/welcomeHeader';
import {fontSize, palette} from '../../../utils/theme/themes';
import StatsNavigation from '../statsNavigation';
import fonts from '../../../utils/theme/fonts';

import styles from './styles';

const Content = () => {
  return (
    <View style={styles.container}>
      <WelcomeHeader
        title="My Stats"
        titleStyles={{
          color: palette.radium,
          fontFamily: fonts.pacifico.regular,
          fontSize: fontSize.large,
        }}
        buttonStyles={{backgroundColor: palette.blackLight}}
      />
      <StatsNavigation />
    </View>
  );
};

export default Content;
