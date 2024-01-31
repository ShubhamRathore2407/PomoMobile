import React from 'react'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'
import { palette } from '../../../utils/theme/themes'

const WelcomeHeaderIcon = () => {
    return (
        <Icon
            color={palette.radium}
            size={35}
            style={{padding: 4}}
            type={IconType.Ionicons}
            name='add-sharp'
        />
    )
}

export default WelcomeHeaderIcon