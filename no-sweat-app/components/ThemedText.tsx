import { Text, TextProps } from "react-native";
import React from "react";

type Props = TextProps & {
  bold?: boolean;
  semi?: boolean;
  medium?: boolean;
};

export default function ThemedText({ bold, semi, medium, style, ...rest }: Props) {
  return (
    <Text
      style={[
        {
          fontFamily: bold
            ? "MontserratBold"
            : semi
            ? "MontserratSemi"
            : medium
            ? "MontserratMedium"
            : "Montserrat",
          color: "#fff",
        },
        style,
      ]}
      {...rest}
    />
  );
}
