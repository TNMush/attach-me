import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton variant="solid" title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
