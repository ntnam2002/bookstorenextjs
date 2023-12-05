import Link from "next/link";
import ProductRating from "../product-rating";

function ProductSimpleCard1({ product }) {
    const { masp, tensach, tacgia, image, mota, gia } = product;

    return (
        <div className="col-md-3 mb-4">
            <div className="card shadow-sm" style={{ width: "300px" }}>
                <img
                    src={image}
                    alt=""
                    className="card-img-top"
                    style={{
                        objectFit: "cover",
                        height: "100px",
                        width: "100%",
                    }}
                />
                <div className="card-body">
                    <Link
                        href={`/product/${masp}`}
                        passHref
                        className="text-dark text-decoration-none stretched-link"
                    >
                        <h5 className="card-title">{tensach}</h5>
                    </Link>
                    <ProductRating />
                    <p className="card-text">{tacgia}</p>
                    <p className="card-text">{gia} n/đ</p>
                </div>
            </div>
        </div>
    );
}

export default ProductSimpleCard1;
