import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-responsive-carousel";
import ProductSimpleCard from "../components/product/product-simple-card";
import { useEffect, useState } from "react";
import BookApi from "./api/bookApi";

export default function Home() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookApi = BookApi;
                const result = await bookApi.getAll();

                // Lấy danh sách sản phẩm
                console.log("Danh sách sản phẩm:", result);
                setBook(result.data);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className="container py-3">
                <div className="row mb-4">
                    <div className="col-12">
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            showArrows={false}
                            showStatus={false}
                            showThumbs={false}
                            transitionTime={500}
                            renderIndicator={(
                                onClickHandler,
                                isSelected,
                                index,
                                label,
                            ) => {
                                if (isSelected) {
                                    return (
                                        <li className="d-inline-block m-2 text-light">
                                            <FontAwesomeIcon
                                                icon={["fas", "circle"]}
                                                size="xs"
                                            />
                                        </li>
                                    );
                                }
                                return (
                                    <li
                                        className="d-inline-block m-2 text-light text-opacity-50"
                                        onClick={onClickHandler}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <FontAwesomeIcon
                                            icon={["fas", "circle"]}
                                            size="xs"
                                        />
                                    </li>
                                );
                            }}
                        >
                            <div className="ratio ratio-21x9">
                                <img
                                    src="/images/pic1.jpg"
                                    alt="Cover image"
                                    className="rounded"
                                />
                            </div>
                            <div className="ratio ratio-21x9">
                                <img
                                    src="/images/pic2.jpg"
                                    alt="Cover image"
                                    className="rounded"
                                />
                            </div>
                            <div className="ratio ratio-21x9">
                                <img
                                    src="/images/pic3.jpg"
                                    alt="Cover image"
                                    className="rounded"
                                />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                            <figure className="figure card-body mb-0">
                                <div
                                    className="bg-secondary rounded-circle d-flex mb-2"
                                    style={{ width: 50, height: 50 }}
                                >
                                    <FontAwesomeIcon
                                        icon={["fas", "money-bill-alt"]}
                                        size="lg"
                                        className="text-primary m-auto"
                                    />
                                </div>
                                <h5 className="mb-1 fw-bold">Giá cả hợp lí</h5>
                                <figcaption className="figure-caption text-dark">
                                    Chúng tôi cam kết cung cấp sản phẩm với giá
                                    cả hợp lí, đảm bảo sự hài lòng của khách
                                    hàng.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                            <figure className="figure card-body mb-0">
                                <div
                                    className="bg-secondary rounded-circle d-flex mb-2"
                                    style={{ width: 50, height: 50 }}
                                >
                                    <FontAwesomeIcon
                                        icon={["fas", "headset"]}
                                        size="lg"
                                        className="text-primary m-auto"
                                    />
                                </div>
                                <h5 className="mb-1 fw-bold">
                                    Hỗ trợ khách hàng 24/7
                                </h5>
                                <figcaption className="figure-caption text-dark">
                                    Đội ngũ hỗ trợ của chúng tôi sẵn sàng phục
                                    vụ bạn mọi lúc 24/7.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm">
                            <figure className="figure card-body mb-0">
                                <div
                                    className="bg-secondary rounded-circle d-flex mb-2"
                                    style={{ width: 50, height: 50 }}
                                >
                                    <FontAwesomeIcon
                                        icon={["fas", "truck"]}
                                        size="lg"
                                        className="text-primary m-auto"
                                    />
                                </div>
                                <h5 className="mb-1 fw-bold">
                                    Vận chuyển nhanh
                                </h5>
                                <figcaption className="figure-caption text-dark">
                                    Quá trình đặt hàng và vận chuyển hàng tối ưu
                                    nhất cho bạn.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <h4 className="mb-3 fw-semibold">Sản phẩm mới</h4>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-5">
                    {book && (
                        <>
                            {book.map((book, index) => (
                                <ProductSimpleCard key={index} product={book} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
