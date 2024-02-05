import React from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import TextWrapper from "../../utils/customComponents/TextWrapper";
import { HeaderLevel } from '../../utils/constants/constants';
import WelcomeHeaderIcon from '../Icons/welcomeHeaderIcon';

import styles from "./styles"

interface Props {
    title?: string;
    description?: string;
    headerLevel?: HeaderLevel;
    hasButton?: boolean;
    buttonTitle?: string;
    buttonStyles?: ViewStyle;
    titleColor?: string
    descriptionColor?: string;
    padding?: number
    customStyles?: ViewStyle
    iconName?:string
    fontFamily?:string | ""
}

const WelcomeHeader: React.FC<Props> = ({ description, headerLevel, title, hasButton, buttonTitle, buttonStyles, titleColor, descriptionColor, customStyles, iconName, fontFamily }) => {
    return (
        <View style={[styles.container, customStyles]}>
            <View>
                {title &&
                    <TextWrapper fontFamily={fontFamily} headerLevel={headerLevel} color={titleColor}>
                        {title}
                    </TextWrapper>
                }
                {description &&
                    <TextWrapper color={descriptionColor}>
                        {description}
                    </TextWrapper>
                }
            </View>
            <View>
                {hasButton &&
                    <TouchableOpacity style={[styles.button, buttonStyles]}>
                        {buttonTitle ?
                            <Text style={styles.buttonText}>{buttonTitle}</Text> :
                            iconName && <WelcomeHeaderIcon iconName={iconName} />
                        }
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default WelcomeHeader;
