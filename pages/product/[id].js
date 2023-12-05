import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductRating from "../../components/product-rating";
import ProductSimpleHorizontal from "../../components/product/product-simple-horizontal";
import { useParams } from "react-router-dom";
import { useRouter } from "next/router";
import BookApi from "../api/bookApi";
import { useEffect, useState } from "react";
import AddToCart from "../../components/product/AddToCart";
import { addToCart } from "../../components/product/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductSimpleCard from "../../components/product/product-simple-card";
import ProductSimpleCard1 from "../../components/product/product-simple-card1";

function ProductDetail() {
    const router = useRouter();
    const { masp, theloai } = router.query;
    const [book, setBook] = useState(null);
    const [item, setItem] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = BookApi;
                const getBook = await data.getbookDetails(masp);
                const getBookSameType = await data.get5BookSameType(theloai);
                console.log(getBookSameType.data);
                setItem(getBookSameType.data);
                if (getBook.data && getBook.data.length > 0) {
                    setBook(getBook.data[0]);
                } else {
                    console.error("Không có data.");
                }
            } catch (error) {
                console.error("Lỗi lấy data:", error);
            }
        };

        fetchData();
    }, [theloai, masp]);

    const image = book ? book.image : null;
    const tensach = book ? book.tensach : null;
    const tacgia = book ? book.tacgia : null;
    const loai = book ? book.theloai : null;
    const mota = book ? book.mota : null;
    const gia = book ? book.gia : null;
    const soluong = book ? book.soluong : null;

    const handleAddToCartSubmit = ({ quantity }) => {
        event.preventDefault();
        const action = addToCart({
            masp,
            image,
            tensach,
            quantity: quantity,
            gia,
        });

        dispatch(action);
    };
    return (
        <div className="vstack">
            <div className="bg-secondary">
                <div className="container">
                    <div className="row py-4 px-2">
                        <nav aria-label="breadcrumb col-12">
                            <ol className="breadcrumb mb-1">
                                <li className="breadcrumb-item">
                                    <a href="#">Danh mục</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Sách</a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    {tensach}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-white mb-4">
                <div className="container py-4">
                    <div className="row gy-3 gx-4">
                        <div className="col-lg-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="ratio ratio-1x1">
                                        <img
                                            className="rounded"
                                            src={image}
                                            width={300}
                                            height={300}
                                            alt="Product image."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="d-flex">
                                <div className="d-inline h2 mb-0 fw-semibold me-3">
                                    {tensach}
                                </div>
                            </div>

                            <div className="vstack">
                                <div className="d-flex mb-3 gap-2">
                                    <ProductRating />
                                    <span className="text-muted small">
                                        {soluong > 0
                                            ? `Còn ${soluong} quyển`
                                            : "Hết hàng"}
                                    </span>
                                    <span
                                        className={`text-${
                                            soluong > 0 ? "success" : "danger"
                                        } small`}
                                    >
                                        <FontAwesomeIcon
                                            icon={[
                                                "fas",
                                                soluong > 0
                                                    ? "check-circle"
                                                    : "times-circle",
                                            ]}
                                        />
                                        &nbsp;
                                        {soluong > 0 ? "Còn Hàng" : "Hết hàng"}
                                    </span>
                                </div>

                                <dl className="row mb-0">
                                    <dt className="col-sm-3 fw-semibold">
                                        Giá
                                    </dt>
                                    <dd className="col-sm-9">{gia} n/đ</dd>
                                    <dt className="col-sm-3 fw-semibold">
                                        Tác giả
                                    </dt>
                                    <dd className="col-sm-9">{tacgia}</dd>
                                    <dt className="col-sm-3 fw-semibold">
                                        Danh Mục
                                    </dt>
                                    <dd className="col-sm-9">{loai}</dd>
                                    <dt className="col-sm-3 fw-semibold">
                                        Vận chuyển
                                    </dt>
                                    <dd className="col-sm-9">VN</dd>
                                </dl>
                                <hr className="text-muted" />

                                <div className="d-flex">
                                    <AddToCart
                                        onSubmit={handleAddToCartSubmit}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-3">
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm">
                            <div
                                className="px-3 d-flex border-bottom overflow-auto"
                                style={{ height: 70 }}
                            >
                                <ul className="nav nav-pills my-auto flex-nowrap">
                                    <li className="nav-item">
                                        <a
                                            href="#"
                                            className="nav-link active"
                                            aria-current="true"
                                        >
                                            Mô tả
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <p>{mota}</p>
                            </div>
                            <div className="card-footer py-3">
                                <small>
                                    <FontAwesomeIcon
                                        icon={["fas", "truck"]}
                                        className="text-success me-2"
                                    />
                                    Vận chuyển trong 1 2 ngày
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm">
                            <div
                                className="px-3 d-flex border-bottom"
                                style={{ height: 70 }}
                            >
                                <h5 className="my-auto fw-semibold">
                                    Sản phẩm liên quan
                                </h5>
                            </div>
                            <div className="card-body">
                                {item && (
                                    <>
                                        {item.map((items, index) => (
                                            <ProductSimpleCard1
                                                key={index}
                                                product={items}
                                                style={{
                                                    width: "100px",
                                                    height: "100px",
                                                }}
                                            />
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default ProductDetail;
