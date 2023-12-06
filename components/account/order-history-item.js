import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OrderHistoryItem({ cancel, order }) {
    // Check if order is defined
    if (!order) {
        return null; // Or you can render a placeholder, loading state, or an error message
    }

    const { madh, makh, hoten, diachi,sdt, email, masp, soluong, tongtien, trangthai, pttt } = order;
    return (
        <div className="card border-0 shadow-sm mb-3">
            <div className="card-header py-3 bg-white">
                <div className="row">
                    <div className="col d-flex">
                        <span className="fw-semibold h5 my-auto">
                            ID đơn hàng: {madh}
                        </span>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-sm btn-outline-primary">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row gx-2 gy-3">
                    <div className="col-md-5">
                        <h6 className="fw-bold">Địa chỉ giao hàng</h6>
                        <div className="vstack text-dark small">
                            <span>{hoten}</span>
                            <span>{diachi}</span>
                            {/* <span>HN</span> */}
                            <span>{sdt}</span>
                            <span>{email}</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h6 className="fw-bold">Phương thức thanh toán</h6>
                        <div className="text-success">
                            <span className="fw-bold">
                                <FontAwesomeIcon
                                    icon={["fas", "money-bill-wave"]}
                                    size="lg"
                                />
                            </span>
                            <span className="ms-2 small">
                            {pttt}
                            </span>
                            
                        </div>
                        {/* <div>Giá: {tongtien}</div> */}
                        {/* <div>Phí vận chuyển: 3,000</div> */}
                        <div className="fw-semibold">Tổng: {tongtien}</div>
                    </div>
                    <div className="col-md-3">
                        <h6 className="fw-bold">Tình trạng</h6>
                            <span className="fw-semibold">
                                 {trangthai}
                            </span>
                    </div>
                </div>
            </div>
            {/* <div className="card-footer small border-0 py-3 text-muted">
                Ngày Đặt Hàng: {new Date().toDateString()}
            </div> */}
        </div>
    );
}

export default OrderHistoryItem;
