import React from 'react';
import {Text, TouchableOpacity, View, ViewStyle, TextStyle} from 'react-native';

import TextWrapper from '../../utils/customComponents/TextWrapper';
import styles from './styles';

interface Props {
  title?: string;
  description?: string;
  hasButton?: boolean;
  buttonTitle?: string;
  onButtonClick?: () => void; 
  buttonStyles?: ViewStyle;
  buttonTextStyles?: TextStyle;
  titleStyles?: TextStyle;
  descriptionStyles?: TextStyle;
  containerStyles?: ViewStyle; 
  ButtonIcon?: React.ComponentType<any>;
}

const WelcomeHeader: React.FC<Props> = ({
  title,
  description,
  hasButton = false,
  buttonTitle,
  onButtonClick,
  buttonStyles,
  buttonTextStyles,
  titleStyles,
  descriptionStyles,
  containerStyles,
  ButtonIcon,
}) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <View>
        {title && <TextWrapper style={[titleStyles]}>{title}</TextWrapper>}
        {description && (
          <TextWrapper style={[descriptionStyles]}>{description}</TextWrapper>
        )}
      </View>
      {hasButton && (
        <TouchableOpacity
          onPress={onButtonClick}
          style={[styles.button, buttonStyles]}>
          {ButtonIcon ? (
            <ButtonIcon />
          ) : (
            <Text style={[styles.buttonText, buttonTextStyles]}>
              {buttonTitle}
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default WelcomeHeader;
