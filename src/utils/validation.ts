import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).*$/,
      "Password should include 1 number, 1 uppercase letter, 1 lowercase letter, 1 special character",
    )
    .required(),
});
