import { axiosClient } from "./axiosApi";

const orderApi = {
    // sendOrder(order) {
    //     const url = `/donhang/Insert`;
    //     return axiosClient.post(url, order);
    // },
    getAllddh() {
        const url = `/dondathangWithkhachhang?makh=2`;
        return axiosClient.get(url);
    }
};
export default orderApi;
