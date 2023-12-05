// CartTableHeader.js
import React from "react";

const CartTableHeader = () => {
    return (
        <tr>
            <th scope="col">Ảnh</th>
            <th scope="col">Tên Hàng</th>
            <th scope="col">Số Lượng</th>
            <th scope="col">Giá</th>
            <th scope="col">Tổng</th>
            <th scope="col">Xóa</th>
        </tr>
    );
};

export default CartTableHeader;
