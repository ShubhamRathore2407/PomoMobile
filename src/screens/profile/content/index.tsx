import React, {useState} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

import {brand, fontSize, palette} from '../../../utils/theme/themes';
import WelcomeHeader from '../../../components/welcomeHeader';
import ProfileDetails from '../profileDetails';
import fonts from '../../../utils/theme/fonts';
import Form from '../form';
import styles from './styles';
import ModalWrapper from '../../../utils/customComponents/ModalWrapper';
import {BlurView} from '@react-native-community/blur';

const EditIcon = () => (
  <Icon
    type={IconType.Ionicons}
    name="pencil-outline"
    size={fontSize.large}
    color={brand.secondaryMain}
  />
);

const Content = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <View style={styles.contentContainer}>
      <WelcomeHeader
        title="My Profile"
        titleStyles={{
          color: palette.radium,
          fontFamily: fonts.pacifico.regular,
          fontSize: fontSize.large,
        }}
        hasButton
        ButtonIcon={EditIcon}
        onButtonClick={() => setShowForm(true)}
        buttonStyles={{backgroundColor: palette.blackLight}}
      />
      <ProfileDetails />

      <ModalWrapper
        isVisible={showForm}
        title={'Update Profile'}
        onClose={() => setShowForm(false)}>
        <Form setShowForm={setShowForm} />
      </ModalWrapper>
    </View>
  );
};

export default Content;
