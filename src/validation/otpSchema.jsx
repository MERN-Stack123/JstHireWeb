import * as yup from 'yup';

const RegExp = /^\d{6}$/;
export const otpSchema = yup.object().shape({
    otp: yup.string()
    .matches(RegExp, 'otp must be 6 digits')
    .required('required!')
});