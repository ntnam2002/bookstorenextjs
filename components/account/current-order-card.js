import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewCartItem from "../checkout/review-cart-item";

function CurrentOrderCard({ id }) {
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
                        <button className="btn btn-sm btn-outline-danger">
                            Hủy đơn hàng
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row gx-2 gy-3">
                    <div className="col-md-5">
                        <h6 className="fw-bold">Thông tin giao hàng</h6>
                        <div className="vstack text-dark small">
                            <span>NTN</span>
                            <span> Số 57 Triều Khúc,Thanh Xuân,Hà Nội</span>
                            <span>Hà Nội</span>
                            <span>Tel: 09899999999</span>
                            <span>Email: ntn2002@gmail.com</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h6 className="fw-bold">Phương thức thanh toán</h6>
                        <div className="text-success">
                            <span className="fw-bold">
                                <FontAwesomeIcon
                                    icon={["fab", "cc-visa"]}
                                    size="lg"
                                />
                            </span>
                            <span className="ms-2 small">
                                XXXX-XXXX-XXXX-2345
                            </span>
                        </div>
                        <div>Giá: 30,000</div>
                        <div>Phí vận chuyển: 3,000</div>
                        <div className="fw-semibold">Tổng tiền: 33,000</div>
                    </div>
                    <div className="col-md-3">
                        <h6 className="fw-bold">Tình trạng</h6>
                        <div className="text-warning">
                            <span className="fw-semibold">Đang thực hiện</span>
                        </div>
                    </div>
                </div>

                <hr className="text-muted" />

                <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="col">
                        <ReviewCartItem />
                    </div>
                    <div className="col">
                        <ReviewCartItem />
                    </div>
                    <div className="col">
                        <ReviewCartItem />
                    </div>
                </div>
            </div>
            <div className="card-footer small border-0 py-3 text-muted">
                Ngày đặt hàng: {new Date().toDateString()}
            </div>
        </div>
    );
}

export default CurrentOrderCard;
