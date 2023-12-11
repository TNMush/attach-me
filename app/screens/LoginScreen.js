import React, { useState } from "react";

import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/Forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).matches().label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={() => console.log(email, password)}
        validationSchema={validationSchema}
      >
        <AppFormField name="email" label="Email" placeholder="Enter email" />
        <AppFormField
          name="password"
          label="Email"
          placeholder="Enter email"
          type="password"
        />
        <SubmitButton title={"Login"} />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;
