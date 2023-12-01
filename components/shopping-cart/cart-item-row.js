import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function CartItemRow({ data }) {
    console.log("data", data);
    const { masp, tensach, quantity, gia, image } = data;

    return (
        <tr>
            <td scope="row">
                <div className="hstack">
                    <img
                        className="rounded"
                        src={image}
                        width={80}
                        height={80}
                        alt="Product image."
                        style={{ objectFit: "cover" }}
                    />
                    <div className="ms-3">
                        <span className="h5">
                            <Link
                                href="/product/1"
                                className="link-dark text-decoration-none"
                            >
                                {tensach}
                            </Link>
                        </span>
                    </div>
                </div>
            </td>
            <td>
                <h6 className="mb-0">{quantity} Quyển</h6>
            </td>
            <td>
                <h6 className="mb-0">{gia}n/đ</h6>
            </td>
            <td>
                <button className="btn btn-sm btn-danger" type="button">
                    <FontAwesomeIcon icon={["fas", "trash-alt"]} />
                </button>
            </td>
        </tr>
    );
}

export default CartItemRow;
