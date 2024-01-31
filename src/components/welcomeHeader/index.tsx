import React from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import TextWrapper from "../../utils/customComponents/TextWrapper";
import fonts from '../../utils/theme/fonts';
import { HeaderLevel } from '../../utils/constants/constants';
import WelcomeHeaderIcon from '../Icons/welcomeHeaderIcon'; 

import styles from "./styles"

interface Props {
    name?: string;
    description?: string;
    headerLevel?: HeaderLevel;
    bold?: boolean;
    hasButton?: boolean;
    buttonTitle?: string;
    buttonStyles?: ViewStyle;
    textColor?:string
    descriptionColor?: string;
    padding?: number
    customStyles?: ViewStyle
}

const WelcomeHeader: React.FC<Props> = ({ bold, description, headerLevel, name, hasButton, buttonTitle, buttonStyles, textColor, descriptionColor, customStyles }) => {
    return (
        <View style={[styles.container, customStyles]}>
            <View>
                <TextWrapper headerLevel={headerLevel} bold={bold} color={textColor}>
                    {name}
                </TextWrapper>
                <TextWrapper fontFamily={fonts.montserrat.lightItalic} color={descriptionColor}>
                    {description}
                </TextWrapper>
            </View>
            <View>
                {hasButton &&
                    <TouchableOpacity style={[styles.button, buttonStyles]}>
                        {buttonTitle ?
                            <Text style={styles.buttonText}>{buttonTitle}</Text> : 
                            <WelcomeHeaderIcon />
                        }
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default WelcomeHeader;
