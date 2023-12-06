import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OrderHistoryItem({ order }) {
    // Check if order is defined
    if (!order) {
        return null; // Or you can render a placeholder, loading state, or an error message
    }

    const { madh, makh, masp, soluong, tongtien, trangthai, pttt } = order;

    return (
        <div className="card border-0 shadow-sm mb-3">
            <div className="card-body">
                <h6 className="mb-0 fw-semibold mt-2">Order ID: {madh}</h6>
                <p>Customer ID: {makh}</p>
                <p>Product ID: {masp}</p>
                <p>Quantity: {soluong}</p>
                <p>Total Price: {tongtien}</p>
                <p>Status: {trangthai}</p>
                <p>Payment Method: {pttt}</p>
            </div>
        </div>
    );
}

export default OrderHistoryItem;
