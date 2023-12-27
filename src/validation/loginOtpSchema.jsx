import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginOtpSchema = yup.object({
  phonenumber: yup
    .string()
    .min(10, "at least 10 digits")
    .max(10, "not more than 10 digits")
    .matches(phoneRegExp, "enter valid number")
    .required("phone number required"),
  otp: yup
    .string()
    .required("otp required")
    .matches(/^[0-9]+$/, "must be only digits")
    .min(4, "at least 4 digits")
    .max(4, "not more than 4 digits"),
});
