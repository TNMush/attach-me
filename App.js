import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import React from "react";
import AppButton from "./app/components/AppButton";
import colors from "./app/styles/colors";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";

function App(props) {
  return (
    <GluestackUIProvider config={config}>
      <LoginScreen />
    </GluestackUIProvider>
  );
}

export default App;
