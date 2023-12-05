import Link from "next/link";
import { useState } from "react";
import CheckoutStepper from "../../components/checkout/checkout-stepper";
import PaymentOptionCheck from "../../components/checkout/payment-option-check";
import Layout from "../../components/layout";
import PricingCard from "../../components/shopping-cart/pricing-card";
import PricingCard1 from "../../components/shopping-cart/pricing-card-for-final";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "../../components/product/selectors";
import { useRouter } from "next/router";
function PaymentInfo() {
    const router = useRouter();
    const { hoten, sdt, email, diachi } = router.query;
    const [option, setOption] = useState("COD");
    const [paymentImage, setPaymentImage] = useState("/images/ck.jpg");
    function handlePaymentOptionChange(name) {
        if (name === "Chuyển khoản") {
            setOption(name);
            setPaymentImage("/images/ck.jpg");
        } else {
            setOption(name);
            setPaymentImage("/images/default.jpg");
        }
    }
    const cartTotal = useSelector(cartTotalSelector);
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-12">
                    <CheckoutStepper step={2} />
                </div>
            </div>
            <div className="row g-3">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-semibold mb-3">
                                Phương thức thanh toán
                            </h4>
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <div className="d-flex flex-wrap gap-2">
                                        <PaymentOptionCheck
                                            name="COD"
                                            title="Trả tiền khi nhận hàng"
                                            checked={option === "COD"}
                                            onCheckedChanged={
                                                handlePaymentOptionChange
                                            }
                                        />
                                        <div></div>
                                        <PaymentOptionCheck
                                            name="Chuyển khoản"
                                            title="Chuyển khoản"
                                            checked={option === "Chuyển khoản"}
                                            onCheckedChanged={
                                                handlePaymentOptionChange
                                            }
                                        />
                                    </div>
                                    <div>
                                        {option === "Chuyển khoản" && (
                                            <div>
                                                <img
                                                    src={paymentImage}
                                                    alt="Chuyển khoản"
                                                    style={{
                                                        width: "500px",
                                                        marginLeft: "130px",
                                                        marginTop: "30px",
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-12 mt-4">
                                    <div className="d-grid gap-2 d-flex justify-content-end">
                                        <Link
                                            href="/checkout/delivery-info"
                                            className="btn btn-outline-primary"
                                        >
                                            Trở lại
                                        </Link>
                                        <Link
                                            href={`/checkout/confirm-checkout?hoten=${hoten}&sdt=${sdt}&email=${email}&diachi=${diachi}&option=${option}`}
                                            className="btn btn-primary"
                                        >
                                            Tiếp tục
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <PricingCard1 data={cartTotal} />
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

PaymentInfo.getLayout = (page) => {
    return <Layout simpleHeader>{page}</Layout>;
};

export default PaymentInfo;
