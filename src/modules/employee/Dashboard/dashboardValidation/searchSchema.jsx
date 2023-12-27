import * as yup from 'yup';


export const searchSchema = yup.object().shape({
    search: yup.string().required('companies required'),
    location: yup.string().required('location required'),
});