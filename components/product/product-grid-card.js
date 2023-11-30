import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import AddToCart1 from "./AddToCart1";

function ProductGridCard({ product }) {
    const { masp, tensach, tacgia, image, mota, gia } = product;
    const handleAddToCartSubmit = ({ quantity }) => {
        const action = addToCart({
            id: product.product.ID,
            product,
            quantity,
        });

        console.log("action: ", action);
        dispatch(action);
    };

    return (
        <div className="card h-100 border-0 shadow-sm">
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
                        href={`/product/${masp}`}
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

                    <div className="hstack gap-2">
                        <AddToCart1 onSubmit={handleAddToCartSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductGridCard;
