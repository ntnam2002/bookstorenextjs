import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { removeFromCart, setQuantity } from "../product/cartSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function CartItemRow1({ data }) {
    const { masp, tensach, quantity, gia, image } = data;
    const [editedQuantity, setEditedQuantity] = useState(quantity);
    const [totalPrice, setTotalPrice] = useState(
        calculateTotalPrice(gia, quantity),
    );
    const dispatch = useDispatch();

    useEffect(() => {
        setTotalPrice(calculateTotalPrice(gia, editedQuantity));
    }, [gia, editedQuantity]);

    const handleDeleteItem = () => {
        const remove = removeFromCart({ masp });
        dispatch(remove);
    };

    const handleUpdateQuantity = () => {
        dispatch(setQuantity({ masp, quantity: editedQuantity }));
    };

    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        className="rounded"
                        src={image}
                        width={80}
                        height={80}
                        alt="Product image."
                    />
                </div>
            </td>
            <td>
                <div className="ms-3">
                    <span className="h5">
                        <Link
                            href={`/product/${masp}`}
                            className="link-dark text-decoration-none"
                        >
                            {tensach}
                        </Link>
                    </span>
                </div>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <input
                        type="number"
                        value={editedQuantity}
                        onChange={(e) => {
                            const inputValue = e.target.value.replace(
                                /[^0-9]/g,
                                "",
                            );
                            const updatedQuantity = Math.max(
                                0,
                                parseInt(inputValue, 10) || 0,
                            );

                            setEditedQuantity(updatedQuantity);
                        }}
                        onBlur={handleUpdateQuantity}
                        className="form-control"
                        style={{ width: "70px" }}
                    />
                </div>
            </td>
            {/* <td>
                <h6 className="mb-0">{gia}n/đ</h6>
            </td> */}
            <td>
                <h6 className="mb-0">{totalPrice}n/đ</h6>
            </td>
            {/* <td>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={handleDeleteItem}
                >
                    <FontAwesomeIcon icon={["fas", "trash-alt"]} />
                </button>
            </td> */}
        </tr>
    );
}

function calculateTotalPrice(unitPrice, quantity) {
    return unitPrice * quantity;
}

export default CartItemRow1;
