import React from "react";
import RNText, { IRNTextProps } from "@freakycoder/react-native-custom-text";

import { HeaderLevel } from "../constants/constants";

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily,
  color = "#757575",
  children,
  style, 
  ...rest
}) => {
  const combinedStyles = [
    { fontFamily, color },
    style,
  ];

  return (
    <RNText style={combinedStyles} {...rest}>
      {children}
    </RNText>
  );
};

export default TextWrapper;
