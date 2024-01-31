import React, { useMemo } from 'react'
import { View } from 'react-native'
import WelcomeHeader from '../../../components/welcomeHeader'
import { HeaderLevel } from '../../../utils/constants/constants'
import TaskList from '../taskList'
import createStyles from "../styles"
import { palette } from '../../../utils/theme/themes'

const Content = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.contentContainer} >
      <WelcomeHeader 
        name='Hey User' 
        description='Ready to complete your tasks!!' 
        bold 
        headerLevel={HeaderLevel.H1} 
        hasButton 
        textColor= {palette.radium} 
        descriptionColor={palette.lightGray} 
        customStyles={{padding : 15, marginTop: 20, marginBottom: 10}} />
      <TaskList />
    </View>
  )
}

export default Content