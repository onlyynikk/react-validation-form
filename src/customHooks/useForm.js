import { useState, useEffect } from "react";

export default function useForm(callback, validate) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  }

  function conditionToSumbit() {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }

  useEffect(() => {
    conditionToSumbit();
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
}
