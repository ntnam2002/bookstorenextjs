import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function PricingCard({ data, pricingOnly, children }) {
    return (
        <div className="card border-0 shadow-sm">
            <div className="card-body">
                <div className="vstack gap-2">
                    <div className="d-flex justify-content-between">
                        <span>Giá:</span>
                        <span>30,000Ks</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Giảm giá:</span>
                        <span className="text-danger">-</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Phí vận chuyển:</span>
                        <span className="text-success">+2,000K</span>
                    </div>

                    <hr className="text-muted" />

                    <div className="d-flex justify-content-between">
                        <span className="h5">Total:</span>
                        <span className="fw-bold h5 mb-0">32,000 K</span>
                    </div>

                    {!pricingOnly && (
                        <div className="d-grid gap-2 mt-2">
                            <Link
                                href="/checkout/delivery-info"
                                className="btn btn-primary"
                            >
                                Thanh toán
                            </Link>
                            <Link href="/" className="btn btn-outline-primary">
                                Tiếp tục mua sắm
                            </Link>
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PricingCard;
