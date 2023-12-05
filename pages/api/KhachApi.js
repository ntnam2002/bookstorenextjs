import { axiosClient } from "./axiosApi";

const KhachApi = {
    InsertKhach: (hoten, username, password, sdt, email, diachi) => {
        const url = `/khachhang/Insert`;
        return axiosClient.post(url, {
            hoten,
            username,
            password,
            sdt,
            email,
            diachi,
        });
    },
    EditIFKhach: (makh) => {
        const url = `/khachhang/EditIF/${makh}`;
        return axiosClient.get(url);
    },
    getKHinfo(username) {
        const url = `/khachhang/Search`;
        return axiosClient.post(
            url,
            {
                username: username,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
    },
};
export default KhachApi;
