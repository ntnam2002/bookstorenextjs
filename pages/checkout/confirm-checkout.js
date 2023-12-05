import { useRouter } from "next/router";
import Link from "next/link";
import CheckoutStepper from "../../components/checkout/checkout-stepper";
import ReviewCartItem from "../../components/checkout/review-cart-item";
import Layout from "../../components/layout";
import PricingCard from "../../components/shopping-cart/pricing-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PricingCard1 from "../../components/shopping-cart/pricing-card-for-final";
import { useSelector } from "react-redux";
import {
    cartList,
    cartTotalSelector,
} from "../../components/product/selectors";
import CartItemRow from "../../components/shopping-cart/cart-item-row";
import CartItemRow1 from "../../components/shopping-cart/cart-item-row1";

function ConfirmCheckout() {
    const router = useRouter();
    const { hoten, sdt, email, diachi, option } = router.query;
    const cartTotal = useSelector(cartTotalSelector);
    const cartitems = useSelector(cartList);
    const handleRequest = () => { 
        
    }
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-12">
                    <CheckoutStepper step={3} />
                </div>
            </div>
            <div className="row g-3">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-semibold mb-3">
                                Vật phẩm trong giỏ
                            </h4>

                            <div className="table-responsive">
                                <table
                                    className="table table-borderless align-middle mb-0"
                                    style={{ width: "200px" }}
                                >
                                    <tbody>
                                        {cartitems.map((item, index) => (
                                            <CartItemRow1
                                                key={index}
                                                data={item}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <hr className="text-muted" />
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <h4 className="fw-semibold">
                                        Địa chỉ vận chuyển
                                    </h4>
                                    <div className="vstack text-dark small">
                                        <span>Họ Tên: {hoten}</span>
                                        <span>Địa Chỉ: {diachi}</span>
                                        <span>SĐT: {sdt}</span>
                                        <span>Email: {email}</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="fw-semibold">
                                        Phương thức thanh toán
                                    </h4>
                                    <div className="d-flex gap-3 text-success">
                                        <span className="fw-bold">
                                            <FontAwesomeIcon
                                                icon={["fa-solid", " fa-moped"]}
                                                size="lg"
                                            />
                                        </span>
                                        <div className="vstack small text-muted">
                                            <span>{option}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <PricingCard1 data={cartTotal} pricingOnly>
                        <div className="mt-3 d-grid gap-2">
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    router.push({
                                        pathname: "/checkout/checkout-success",
                                    });
                                    handleRequest;
                                }}
                            >
                                Xác Nhận
                            </button>
                            <Link
                                href="/checkout/payment-info"
                                className="btn btn-outline-primary"
                            >
                                Trở lại
                            </Link>
                        </div>
                    </PricingCard1>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

ConfirmCheckout.getLayout = (page) => {
    return <Layout simpleHeader>{page}</Layout>;
};

export default ConfirmCheckout;
