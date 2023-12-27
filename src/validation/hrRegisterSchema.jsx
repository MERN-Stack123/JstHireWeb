import * as yup from "yup";

const emailAddresses = ["test@gmail.com", "test2@gmail.com", "test3@gmail.com"];
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const hrRegisterSchema = yup.object({
  username: yup.string().min(2).max(25).required("required!"),

  companyemailid: yup
    .string()
    .matches(/^(?!.*@[^,]*,)/)
    // .test('company-email', 'Email should be associated with company domain', function (value) {
    //   return value.split('@')[1].length >= 2;
    // })
    .lowercase()
    .email("must be valid email!")
    .notOneOf(emailAddresses, "email already taken!")
    .required("required!"),

  phonenumber: yup
    .string()
    .min(10, "at least 10 digits")
    .max(10, "not more than 10 digits")
    .matches(phoneRegExp, "enter valid number")
    .typeError("That doesn't look like a phone number")
    .required("required"),

  companyname: yup.string().min(10).required("required!"),

  addressarea: yup.string().min(10).required("required!"),

  locationcitystate: yup.string().required("required"),

  password: yup
    .string()
    .matches(lowercaseRegex, "one lowercase required!")
    .matches(uppercaseRegex, "one uppercase required!")
    .matches(numericRegex, "one number required!")
    .min(8, "minimum 8 characters required!")
    .required("required!"),

  confirmpassword: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password"), null], "password must be the same!"),
});
