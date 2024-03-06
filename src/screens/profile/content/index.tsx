import React, { useMemo, useState } from 'react'
import { View } from 'react-native'

import WelcomeHeader from '../../../components/welcomeHeader'
import createStyles from "../styles"
import { brand, fontSize, palette } from '../../../utils/theme/themes'
import ProfileDetails from '../profileDetails'
import fonts from '../../../utils/theme/fonts'
import Form from '../form'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'

const EditIcon = () => <Icon type={IconType.Ionicons} name="pencil-outline" size={fontSize.large} color={brand.secondaryMain} />;

const Content = () => {
  const styles = useMemo(() => createStyles(), []);
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
      {showForm && (
        <Form setShowForm={setShowForm} />
      )}
    </View>
  );
};

export default Content;