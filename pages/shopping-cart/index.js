import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItemRow from "../../components/shopping-cart/cart-item-row";
import PricingCard from "../../components/shopping-cart/pricing-card";

import { useSelector } from "react-redux";
import {
    cartList,
    cartTotalSelector,
} from "../../components/product/selectors";
import CartTableHeader from "../../components/CartTableHeader";

function ShoppingCart() {
    const cartTotal = useSelector(cartTotalSelector);
    const cartitems = useSelector(cartList);
    return (
        <div className="container py-4">
            <div className="row g-3">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white">
                            <h5 className="my-2">Giỏ hàng</h5>
                        </div>
                        <div className="card-body p-2">
                            <div className="table-responsive">
                                <table className="table table-borderless align-middle mb-0">
                                    <thead>
                                        <CartTableHeader />
                                    </thead>
                                    <tbody>
                                        {cartitems.map((item, index) => (
                                            <CartItemRow
                                                key={index}
                                                data={item}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer py-3">
                            <small>
                                <FontAwesomeIcon
                                    icon={["fas", "truck"]}
                                    className="text-success me-2"
                                />
                                Giao hàng từ 1 đến 2 ngày
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <PricingCard data={cartTotal} />
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default ShoppingCart;
