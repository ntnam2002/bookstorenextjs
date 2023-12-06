import { useSelector } from "react-redux";
import AccountMenu from "../../components/account-menu";
import OrderHistoryItem from "../../components/account/order-history-item";
import Layout from "../../components/layout";
import orderApi from "../api/donhangApi"; 
import React, { useState, useEffect } from "react";
import KhachApi from "../api/KhachApi";

function OrderHistory() {
    const [orderHistory, setOrderHistory] = useState([]);
    const username = useSelector((state) => state.auth.username);
    
    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
             const data = await KhachApi.getKHinfo(username)
             const makh = data.data[0].makh;
             
                // Gọi API để lấy danh sách đơn đặt hàng
                const response = await orderApi.getAllddh(makh);

                // Cập nhật state với dữ liệu từ API
                setOrderHistory(response.data);
            } catch (error) {
                console.error("Error fetching order history:", error);
            }
        };

        // Gọi hàm fetchOrderHistory
        fetchOrderHistory();
    }, []); // Thực hiện một lần sau khi component được render

    return (
        <div>
            <div className="bg-secondary">
                <div className="container">
                    <div className="row py-4 px-2">
                        <nav aria-label="breadcrumb col-12">
                            <ol className="breadcrumb mb-1">
                                <li className="breadcrumb-item">
                                    <a href="#">Trang chủ</a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Lịch sử đặt hàng
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="row g-3">
                    <div className="col-lg-3">
                        <AccountMenu current="order-history" />
                    </div>
                    <div className="col-lg-9">
                        {/* <OrderHistoryItem id={20001} />
                        <OrderHistoryItem id={20002} cancel /> */}
                        {/* Sử dụng dữ liệu từ API để tạo các OrderHistoryItem */}
                        {orderHistory.map(order => (
                            <OrderHistoryItem key={order.id} order={order} />
                        ))}

                        <nav className="float-end mt-3">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        Trước
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        Sau
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

OrderHistory.getLayout = (page) => {
    return <Layout simpleHeader>{page}</Layout>;
};

export default OrderHistory;
