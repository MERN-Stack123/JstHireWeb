import * as yup from "yup";

const emailAddresses = ["test@gmail.com", "test2@gmail.com", "test3@gmail.com"];
// replace data with api or pattern matching data store in db in email format

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .matches(/^(?!.*@[^,]*,)/)
    .lowercase()
    .email("must be valid email!")
    .notOneOf(emailAddresses, "email already taken!")
    .required("required!"),
});
