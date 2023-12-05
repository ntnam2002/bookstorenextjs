import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
function PricingCard({ data, children }) {
    console.log("hahahah");
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    console.log(isLoggedIn);
    const router = useRouter();
    const handleCheckout = () => {
        if (isLoggedIn) {
            console.log("Đã đăng nhaapj");
        } else {
            alert("Bạn cần đăng nhập để thanh toán");
            router.push({
                pathname: "/auth/login",
            });
        }
    };
    console.log("hahahah");
    return (
        <div className="card border-0 shadow-sm">
            <div className="card-body">
                <div className="vstack gap-2">
                    <div className="d-flex justify-content-between">
                        <span>Giá:</span>
                        <span>{data}</span>
                    </div>
                    {/* <div className="d-flex justify-content-between">
                        <span>Phí vận chuyển:</span>
                        <span className="text-success">+2,000K</span>
                    </div> */}

                    <hr className="text-muted" />

                    <div className="d-flex justify-content-between">
                        <span className="h5">Tổng:</span>
                        <span className="fw-bold h5 mb-0">{data}</span>
                    </div>
                    <div className="d-grid gap-2 mt-2">
                        <Link
                            href="/checkout/delivery-info"
                            className="btn btn-primary"
                            onClick={handleCheckout}
                        >
                            Thanh toán
                        </Link>
                        <Link
                            href="/explore"
                            className="btn btn-outline-primary"
                        >
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PricingCard;
