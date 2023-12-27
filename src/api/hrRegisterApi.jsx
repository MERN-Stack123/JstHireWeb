// hrRegisterApi.jsx

import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/hr"; // Replace with your API base URL

export const hrFetchData = async (values) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/registration/`, values); // Replace with your API end point URL endpoint URL
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
