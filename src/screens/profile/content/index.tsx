import React, { useMemo } from 'react'
import { Text, View } from 'react-native'

import WelcomeHeader from '../../../components/welcomeHeader'
import { HeaderLevel } from '../../../utils/constants/constants'
import createStyles from "../styles"
import { palette } from '../../../utils/theme/themes'
import ProfileDetails from '../profileDetails'
import fonts from '../../../utils/theme/fonts'

const Content = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.contentContainer}>
      <WelcomeHeader
        title='My Profile'
        headerLevel={HeaderLevel.Large}
        titleColor={palette.radium}
        hasButton
        iconName='pencil-outline'
        fontFamily={fonts.pacifico.regular}
        buttonStyles={{ backgroundColor: palette.blackLight, borderRadius: 8 }}
        customStyles={{ padding: 15, marginTop: 20, marginBottom: 10 }} />
      <ProfileDetails />
    </View>
  )
}

export default Content