/* eslint-disable no-unreachable */
// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://api.example.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const getData = async () => {
  try {
    // const response = await api.get('/data');
    return { email: "adm@gmail.com", password: "123123" };
  } catch (error: any) {
    return null;
  }
};
