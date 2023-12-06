import { axiosClient } from "./axiosApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import KhachApi from "./KhachApi";
import DeliveryInfo from "../checkout/delivery-info";


const orderApi = {
    getAllddh(makh) {
        
        // const url = `/dondathangWithkhachhang?makh=2`;
        const url = `/dondathangWithkhachhang?makh=${makh}`;
        return axiosClient.get(url);
    },
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
};
export default orderApi;
