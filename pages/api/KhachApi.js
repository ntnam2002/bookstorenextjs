import { axiosClient } from "./axiosApi";

const KhachApi = {
    InsertKhach: (hoten, username, password, sdt, email, diachi) => {
      const url = `/khachhang/Insert`;
      return axiosClient.post(url, { hoten, username, password, sdt, email, diachi });
    },
    EditIFKhach: (makh) => {
      const url = `/khachhang/EditIF/${makh}`;
      return axiosClient.get(url);
    },
  };
export default KhachApi;

