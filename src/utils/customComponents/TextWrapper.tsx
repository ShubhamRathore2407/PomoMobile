import React from "react";
import RNText, { IRNTextProps } from "@freakycoder/react-native-custom-text";
/**
 * ? Local Imports
 */
import fonts from "../theme/fonts";
import { HeaderLevel } from "../constants/constants";

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
  headerLevel?: HeaderLevel
}

const headerStyles: Record<HeaderLevel, any> = {
  h1: { fontFamily: fonts.montserrat.bold, fontSize: 24 },
  h2: { fontFamily: fonts.montserrat.bold, fontSize: 20 },
  h3: { fontFamily: fonts.montserrat.bold, fontSize: 18 },
  h4: { fontFamily: fonts.montserrat.bold, fontSize: 16 },
  h5: { fontFamily: fonts.montserrat.bold, fontSize: 14 },
  h6: { fontFamily: fonts.montserrat.bold, fontSize: 12 },
};


const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = fonts.montserrat.regular,
  color = "#757575",
  children,
  headerLevel,
  ...rest
}) => {
  const style = headerLevel ? headerStyles[headerLevel] : {};
  return (
    <RNText fontFamily={fontFamily} color={color} style={style} {...rest}>
      {children}
    </RNText>
  );
};

export default TextWrapper;
