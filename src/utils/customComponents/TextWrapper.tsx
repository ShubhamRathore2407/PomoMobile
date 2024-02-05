import React from "react";
import RNText, { IRNTextProps } from "@freakycoder/react-native-custom-text";
/**
 * ? Local Imports
 */
import { HeaderLevel } from "../constants/constants";

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
  headerLevel?: HeaderLevel
}

const headerStyles: Record<HeaderLevel, any> = {
  Large: { fontSize: 32 },
  h1: { fontSize: 24 },
  h2: { fontSize: 20 },
  h3: { fontSize: 18 },
  h4: { fontSize: 16 },
  h5: { fontSize: 14 },
  h6: { fontSize: 12 },
};

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily,
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
