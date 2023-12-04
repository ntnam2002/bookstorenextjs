import { axiosClient } from "./axiosApi";

const LoginApi = {
    login: (username, password) => {
      const url = `/khachhang/LoginKH`;
      // Gọi API login với method POST và truyền dữ liệu username và password
      return axiosClient.post(url, { username, password });
    },
  };
export default LoginApi;
