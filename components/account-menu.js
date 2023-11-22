import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const itemCss = "p-2 my-list-item";

function AccountMenu({ current }) {
    return (
        <div className="card border-0 shadow-sm">
            <div className="card-header">
                <h4 className="mb-0 fw-semibold py-2">Account</h4>
            </div>
            <div className="card-body">
                <div className="d-flex flex-column gap-2">
                    <Link
                        href="/account/profile"
                        className={
                            itemCss +
                            (current === "profile" ? " active" : "")
                        }>

                        <FontAwesomeIcon
                            icon={["fas", "user-alt"]}
                            className="me-2"
                            fixedWidth
                        />My profile
                    </Link>

                    <Link
                        href="/account/current-orders"
                        className={
                            itemCss +
                            (current == "current-orders" ? " active" : "")
                        }>

                        <FontAwesomeIcon
                            icon={["fas", "shopping-bag"]}
                            className="me-2"
                            fixedWidth
                        />Current orders
                    </Link>

                    <Link
                        href="/account/order-history"
                        className={
                            itemCss +
                            (current == "order-history" ? " active" : "")
                        }>

                        <FontAwesomeIcon
                            icon={["fas", "truck"]}
                            className="me-2"
                            fixedWidth
                        />Orders history
                    </Link>

                    <Link
                        href="/account/favorite-list"
                        className={
                            itemCss +
                            (current == "favorite-list" ? " active" : "")
                        }>

                        <FontAwesomeIcon
                            icon={["fas", "heart"]}
                            className="me-2"
                            fixedWidth
                        />My favorites
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AccountMenu;
