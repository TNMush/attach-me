import React from "react";
import { StyleSheet } from "react-native";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  FormControlErrorText,
  FormControlError,
  FormControlErrorIcon,
} from "@gluestack-ui/themed";

function AppTextInput({
  label,
  placeholder,
  type = "text",
  onChangeText,
  onBlur,
}) {
  return (
    <Box h="$32" w="$72" style={styles.container}>
      <FormControl size="lg">
        <FormControlLabel mb="$1">
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
        <Input style={styles.text}>
          <InputField
            type={type}
            defaultValue=""
            placeholder={placeholder}
            onChangeText={onChangeText}
            onBlur={onBlur}
          />
        </Input>
      </FormControl>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  text: {
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
  },
});

export default AppTextInput;
