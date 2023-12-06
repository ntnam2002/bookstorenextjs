import { axiosClient } from "./axiosApi";

const orderApi = {
<<<<<<< HEAD
    // sendOrder(order) {
    //     const url = `/donhang/Insert`;
    //     return axiosClient.post(url, order);
    // },
    getAllddh() {
        const url = `/dondathangWithkhachhang?makh=2`;
        return axiosClient.get(url);
    }
=======
    sendOrder(orders) {
        console.log(orders);
        const url = `/dondathang/Insert`;
        const ntn = orders.maspArrayValue;
        console.log(ntn);
        const item = orders.maspArrayValue.map((order) => {
            return {
                masp: order.masp,
                soluong: order.quantity,
                tongtien: order.tongtien,
            };
        });
        const orderPromises = orders.maspArrayValue.map((maspArrayItem) =>
            axiosClient.post(
                url,
                {
                    madh: orders.madh,
                    makh: orders.makh,
                    masp: maspArrayItem.masp,
                    soluong: maspArrayItem.quantity,
                    // tongtien: maspArrayItem.tongtien,
                    trangthai: orders.trangthai,
                    pttt: orders.option,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            ),
        );

        return Promise.all(orderPromises);
    },
>>>>>>> 1e8b725a41d5e68d6bdff03bff8737a058cfbce6
};
export default orderApi;
