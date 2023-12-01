import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductGridCard from "../../components/product/product-grid-card";
import FilterByPrice from "../filter/FilterByPrice";
import BookApi from "../api/bookApi";
import { useEffect, useState } from "react";
function ExploreProducts() {
    const initialFilter = {
        _start: 0,
        _length: 8,
        _pageNumber: 1,
    };
    const [filter, setFilter] = useState(initialFilter);
    const [product, setProduct] = useState([]);
    const [pagination, setPagination] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const obj = BookApi;

                const result = await obj.getAllBook(filter);

                const listProduct = await obj.getListProductInPrice(filter);

                setProduct(listProduct.data);
                setPagination(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [filter]);
    const handlePriceChange = ({ _minPrice, _maxPrice }) => {
        const newFilter = {
            maxPrice: _maxPrice,
            minPrice: _minPrice,
        };
        setFilter(newFilter);
    };
    const handlePageChange = (e, page) => {
        console.log("Current page:", page);
        const newFilter = {
            ...filter,
            _pageNumber: page,
        };
        console.log(newFilter);
        setFilter(newFilter);
    };

    return (
        <div className="vstack">
            <div className="bg-secondary">
                <div className="container">
                    <div className="row py-4 px-2">
                        <nav aria-label="breadcrumb col-12">
                            <ol className="breadcrumb mb-1">
                                <li className="breadcrumb-item">
                                    <a href="#">All Categories</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Sách</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="row g-3">
                    <div className="col-lg-3">
                        <div className="accordion shadow-sm rounded">
                            {/* <div className="accordion-item border-bottom">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fw-bold"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                    >
                                        Danh Mục
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                >
                                    <div className="accordion-body pt-2">
                                        <div className="vstack gap-2">
                                            {/* <a
                                                href="#"
                                                className="fw-medium link-dark text-decoration-none"
                                            >
                                                Văn Phòng Phẩm
                                            </a> 
                                            <a
                                                href="#"
                                                className="fw-medium link-dark text-decoration-none"
                                            >
                                                Sách
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="accordion-item border-bottom">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fw-bold"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="true"
                                    >
                                        Phân loại
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse show"
                                >
                                    <div className="accordion-body pt-2">
                                        <div className="vstack gap-2">
                                            <div className="d-flex gap-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                                <label className="fw-medium flex-grow-1">
                                                    Văn Cao
                                                </label>
                                                <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                                                    50
                                                </span>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                                <label className="fw-medium flex-grow-1">
                                                    Nguyễn Nhật Ánh
                                                </label>
                                                <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                                                    100
                                                </span>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                                <label className="fw-medium flex-grow-1">
                                                    Chế Lan Viên
                                                </label>
                                                <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                                                    30
                                                </span>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                                <label className="fw-medium flex-grow-1">
                                                    Tô Hoài
                                                </label>
                                                <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                                                    60
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fw-bold"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="true"
                                    >
                                        Tầm giá
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse show"
                                >
                                    <FilterByPrice
                                        onChange={handlePriceChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        {/* <div className="hstack justify-content-between mb-3">
                            <span className="text-dark"></span>
                            <div className="btn-group" role="group">
                                <button className="btn btn-outline-dark">
                                    <FontAwesomeIcon
                                        icon={["fas", "sort-amount-up"]}
                                    />
                                </button>
                                <button className="btn btn-outline-dark">
                                    <FontAwesomeIcon
                                        icon={["fas", "th-list"]}
                                    />
                                </button>
                            </div>
                        </div> */}
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-5">
                            {product &&
                                product.map((singleProduct, index) => (
                                    <ProductGridCard
                                        key={index}
                                        product={singleProduct}
                                    />
                                ))}
                        </div>

                        {/* <nav className="float-end mt-3">
                            <Pagination
                                total={Math.ceil(
                                    pagination / initialFilter._length,
                                )}
                                onChange={handlePageChange}
                                pageSize={initialFilter._length}
                                current={filter._pageNumber}
                            />
                        </nav> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreProducts;
