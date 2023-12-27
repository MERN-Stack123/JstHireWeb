import * as yup from "yup";


const adhreg = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const regexp = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
export const verificationSchema = yup.object().shape({
    aadhaarNumber: yup
    .string()
    .min(12, "at least 12 digits!")
    .max(12, 'not more than 12 digits!')
    .matches(adhreg, "enter valid number!")
    .required("required!"),

});
