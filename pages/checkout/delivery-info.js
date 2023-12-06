import Link from "next/link";
import CheckoutStepper from "../../components/checkout/checkout-stepper";
import PricingCard from "../../components/shopping-cart/pricing-card";
import Layout from "../../components/layout";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "../../components/product/selectors";
import PricingCard1 from "../../components/shopping-cart/pricing-card-for-final";
import KhachApi from "../api/KhachApi";
import { useEffect } from "react";
import { useState } from "react";

function DeliveryInfo() {
    const cartTotal = useSelector((state) => state.cart.total);
    const username = useSelector((state) => state.auth.username);
    const [info, setInfo] = useState(null);
    const fetchData = async () => {
        const obj = KhachApi;
        const data = await obj.getKHinfo(username);
        console.log(data.data);
        setInfo(data.data[0]);
    };

    useEffect(() => {
        fetchData();
    }, []);
    const makh = info ? info.makh : "";
    const hoten = info ? info.hoten : "";
    const sdt = info ? info.sdt : "";
    const email = info ? info.email : "";
    const diachi = info ? info.diachi : "";
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-12">
                    <CheckoutStepper />
                </div>
            </div>
            <div className="row g-3">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <form className="row g-3">
                                <h4 className="fw-semibold mb-0">
                                    Thông tin liên hệ
                                </h4>
                                <div className="col-md-6">
                                    <label className="form-label">Họ Tên</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={hoten}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">
                                        Điện thoại
                                    </label>
                                    <div className="input-group">
                                        <div>
                                            <select className="form-select rounded-0 rounded-start bg-light">
                                                <option>+84</option>
                                            </select>
                                        </div>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            defaultValue={sdt}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="name@domain.com"
                                        defaultValue={email}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <hr className="text-muted mb-0" />
                                </div>

                                <h4 className="fw-semibold mb-0">
                                    Thông tin giao hàng
                                </h4>
                                <div className="col-md-12">
                                    <label className="form-label">
                                        Địa chỉ
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={diachi}
                                    />
                                </div>
                                {/* <div className="col-md-4">
                                    <label className="form-label">
                                        Thành phố
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div> */}
                                {/* <div className="col-md-12">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label">
                                            Lưu địa chỉ
                                        </label>
                                    </div>
                                </div> */}

                                <div className="col-md-12 mt-4">
                                    <div className="d-grid gap-2 d-flex justify-content-end">
                                        <Link
                                            href="/shopping-cart"
                                            className="btn btn-outline-primary"
                                        >
                                            Hủy
                                        </Link>
                                        <Link
                                            href={`/checkout/payment-info?hoten=${hoten}&sdt=${sdt}&email=${email}&diachi=${diachi}&username=${username}`}
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

DeliveryInfo.getLayout = (page) => {
    return <Layout simpleHeader>{page}</Layout>;
};

export default DeliveryInfo;
