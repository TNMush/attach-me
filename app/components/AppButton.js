import React from "react";
import { StyleSheet } from "react-native";

import { Button, ButtonIcon, ButtonText, View } from "@gluestack-ui/themed";

import colors from "../styles/colors";

const AppButton = ({
  variant,
  title,
  color = "primary",
  icon = "",
  onPress,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Button
          variant={variant}
          size="lg"
          style={[styles.button, { backgroundColor: colors[color] }]}
          onPress={onPress}
        >
          <ButtonText>{title}</ButtonText>
          {icon != "" && <ButtonIcon as={icon} />}
        </Button>
      </View>
    </>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    width: "100%",
    marginBottom: 10,
    borderRadius: 25,
  },
});
