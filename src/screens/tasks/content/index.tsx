import React, { useMemo } from 'react'
import { View } from 'react-native'

import WelcomeHeader from '../../../components/welcomeHeader'
import { HeaderLevel } from '../../../utils/constants/constants'
import TaskList from '../taskList'
import createStyles from "../styles"
import { palette } from '../../../utils/theme/themes'
import fonts from '../../../utils/theme/fonts'

const Content = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.contentContainer} >
      <WelcomeHeader 
        title='Hey User' 
        description='Ready to complete your tasks!!' 
        headerLevel={HeaderLevel.Large} 
        hasButton 
        iconName='add-sharp'
        titleColor= {palette.radium} 
        fontFamily={fonts.pacifico.regular}
        descriptionColor={palette.lightGray} 
        buttonStyles={{backgroundColor: palette.blackLight, borderRadius: 8}}
        customStyles={{padding : 15, marginTop: 20, marginBottom: 10}} />
      <TaskList />
    </View>
  )
}

export default Content