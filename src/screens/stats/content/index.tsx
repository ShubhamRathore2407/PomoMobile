import React from 'react'
import { View } from 'react-native'
import WelcomeHeader from '../../../components/welcomeHeader'
import { palette } from '../../../utils/theme/themes'
import { HeaderLevel } from '../../../utils/constants/constants'
import fonts from '../../../utils/theme/fonts'
import StatsNavigation from '../statsNavigation'
import styles from './styles'

const Content = () => {
  return (
    <View style={styles.container}>
      <WelcomeHeader
        title='My Stats'
        headerLevel={HeaderLevel.Large}
        titleColor={palette.radium}
        fontFamily={fonts.pacifico.regular}
        buttonStyles={{ backgroundColor: palette.blackLight, borderRadius: 8 }}
        customStyles={{ padding: 15, marginTop: 20, marginBottom: 10 }} />
      <StatsNavigation />
    </View>
  )
}

export default Content