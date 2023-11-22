import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OrderHistoryItem({ id, cancel }) {
    return (
        <div className="card border-0 shadow-sm mb-3">
            <div className="card-header py-3 bg-white">
                <div className="row">
                    <div className="col d-flex">
                        <span className="fw-semibold h5 my-auto">
                            ID đơn hàng: {id}
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
                            <span>NTN</span>
                            <span>57 Triều khúc</span>
                            <span>HN</span>
                            <span>SĐT: +849999999999</span>
                            <span>Email: ntn2002@gmail.com</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h6 className="fw-bold">Phương thức thanh toán</h6>
                        <div className="text-success">
                            {cancel ? (
                                <>
                                    <span className="fw-bold">
                                        <FontAwesomeIcon
                                            icon={["fas", "money-bill-wave"]}
                                            size="lg"
                                        />
                                    </span>
                                    <span className="ms-2 small">
                                        Tiền mặt khi nhận hàng
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="fw-bold">
                                        <FontAwesomeIcon
                                            icon={["fab", "cc-visa"]}
                                            size="lg"
                                        />
                                    </span>
                                    <span className="ms-2 small">
                                        XXXX-XXXX-XXXX-2345
                                    </span>
                                </>
                            )}
                        </div>
                        <div>Giá: 30,000</div>
                        <div>Phí vận chuyển: 3,000</div>
                        <div className="fw-semibold">Tổng: 33,000</div>
                    </div>
                    <div className="col-md-3">
                        <h6 className="fw-bold">Tình trạng</h6>
                        <div
                            className={cancel ? "text-danger" : "text-success"}
                        >
                            <span className="fw-semibold">
                                {cancel ? "CANCELLED" : "DELIVERED"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer small border-0 py-3 text-muted">
                Ngày Đặt Hàng: {new Date().toDateString()}
            </div>
        </div>
    );
}

export default OrderHistoryItem;
