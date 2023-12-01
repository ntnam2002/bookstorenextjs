import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ProductSimpleHorizontal({ id }) {
    return (
        <div className="d-flex py-2">
            <div className="flex-shink-0" style={{ height: 80 }}>
                <img
                    className="rounded"
                    src={``}
                    width={80}
                    height={80}
                    alt="Product image."
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="d-flex flex-column flex-grow-1 ms-3">
                <Link href="" className="text-dark text-decoration-none">
                    Tên hàng
                </Link>
                <h6 className="mb-0 fw-semibold">10000Ks</h6>
                <div className="mt-auto">
                    <button className="btn btn-sm btn-secondary text-primary rounded-3">
                        <FontAwesomeIcon icon={("fas", "cart-plus")} />
                        &nbsp;Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductSimpleHorizontal;
