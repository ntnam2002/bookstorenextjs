import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import AddToCart1 from "./AddToCart1";
import { addToCart } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
function ProductGridCard({ product }) {
    const { masp, tensach, tacgia, theloai, image, mota, gia } = product;
    const dispatch = useDispatch();
    const handleAddToCartSubmit = ({ quantity }) => {
        event.preventDefault();
        const action = addToCart({
            masp,
            image,
            tensach,
            quantity,
            gia,
        });

        dispatch(action);
    };
    return (
        <div>
            <div
                // className="card-container"
                style={{
                    margin: "5px 5px 5px 5px",
                    overflow: "hidden",
                    border: "1px solid #e5e5e5",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                <div className="card-body">
                    <div className="vstack gap-2">
                        <div className="ratio ratio-1x1">
                            <img
                                className="card-img-top"
                                src={image}
                                alt=""
                                style={{
                                    objectFit: "center",
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                        <Link
                            href={`/product/${masp}?masp=${masp}&theloai=${theloai}`}
                            className="text-dark text-decoration-none stretched-link"
                            style={{
                                display: "block",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {tensach}
                        </Link>

                        <h6 className="fw-semibold">{gia}</h6>

                        <AddToCart1
                            onSubmit={handleAddToCartSubmit}
                            style={{ zIndex: 10 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductGridCard;
