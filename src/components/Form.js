import React, { useState } from "react";
import FormSignup from "../components/FormSignup";
import FormSuccess from "../components/FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
    </>
  );
};

export default Form;
