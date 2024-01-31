import React from 'react'
import RNBounceable from "@freakycoder/react-native-bounceable";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { palette } from '../../../utils/theme/themes';

const HeaderIcon = () => {
  return (
    <RNBounceable>
        <Icon
            name="prism-outline"
            type={IconType.Ionicons}
            color={palette.radium}
            size={30}
        />
    </RNBounceable>
  )
}

export default HeaderIcon