import * as yup from "yup";


const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;


export const setPasswordSchema = yup.object().shape({
  newpassword: yup
    .string()
    .matches(lowercaseRegex, "one lowercase required!")
    .matches(uppercaseRegex, "one uppercase required!")
    .matches(numericRegex, "one number required!")
    .min(8, "minimum 8 characters required!")
    .required("required!"),

  confirmpassword: yup
    .string()
    .required("required")
    .oneOf([yup.ref("newpassword"), null], "password must be the same!"),
});
