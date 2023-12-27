import * as yup from "yup";

const emailAddresses = ["test@gmail.com", "test2@gmail.com", "test3@gmail.com"];
// replace data with api or pattern matching data store in db in email format

export const hrEmailSchema = yup.object({
  email: yup
    .string()
    .matches(/^(?!.*@[^,]*,)/)
    .lowercase()
    .email("must be valid email!")
    .notOneOf(emailAddresses, "email already taken!")
    .required("required!"),
  otp: yup
    .string()
    .required("otp required")
    .matches(/^[0-9]+$/, "must be only digits")
    .min(4, "at least 4 digits")
    .max(4, "not more than 4 digits"),
});
