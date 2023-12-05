import Link from "next/link";
import ProductRating from "../product-rating";

function ProductSimpleCard({ product }) {
    const { masp, tensach, tacgia, image, mota, gia } = product;

    return (
        <div className="card-container">
            <div
                className="card h-100 border-0 shadow-sm"
                style={{ margin: "50px 5px 5px 5px", overflow: "hidden" }}
            >
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
                <div className="card-body" style={{ height: "150px" }}>
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

                    <ProductRating />
                    <h6 className="mb-0 fw-semibold mt-2">{tacgia}</h6>
                    <h6 className="mb-0 fw-semibold mt-2">{gia} n/đ</h6>
                </div>
            </div>
        </div>
    );
}

export default ProductSimpleCard;
