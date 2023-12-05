import { axiosClient } from "./axiosApi";

const orderApi = {
    sendOrder(order) {
        const url = `/donhang/Insert`;
        return axiosClient.post(url, order);
    },
};
export default orderApi;
