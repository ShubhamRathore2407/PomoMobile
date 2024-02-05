import React from 'react'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'
import { palette } from '../../../utils/theme/themes'

interface Props {
    iconName : string
}
const WelcomeHeaderIcon: React.FC<Props> = ({iconName}) => {
    return (
        <Icon
            color={palette.radium}
            size={30}
            style={{padding: 4}}
            type={IconType.Ionicons}
            name= {iconName}
        />
    )
}

export default WelcomeHeaderIcon