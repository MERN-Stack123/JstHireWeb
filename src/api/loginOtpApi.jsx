// loginOtpApi.jsx
import axios from "axios";

const BASE_URL = "https://api.example.com";

export const loginApi = async (values) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, values);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// export const verifyOtpApi = async (values) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/verify-otp`, values);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };
