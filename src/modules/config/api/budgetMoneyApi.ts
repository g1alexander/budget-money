import axios from "axios";

export const budgetMoneyApi = () => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer `,
  };

  return axios.create({
    baseURL: process.env.API_URL,
    headers,
    timeout: 110000,
  });
};
