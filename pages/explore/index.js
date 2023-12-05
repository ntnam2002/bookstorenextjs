import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductGridCard from "../../components/product/product-grid-card";
import FilterByPrice from "../filter/FilterByPrice";
import BookApi from "../api/bookApi";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";

function ExploreProducts() {
    const initialFilter = {
        _start: 0,
        _length: 8,
        _pageNumber: 1,
        _theloai: [],
    };
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const [filter, setFilter] = useState(initialFilter);
    const [product, setProduct] = useState([]);
    const [pagination, setPagination] = useState(0);
    const [bookType, setBookType] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const obj = BookApi;
                const result = await obj.getAllBook(filter);

                const listProduct = await obj.getListProductInPrice(filter);

                const bookType = await obj.getBooktype();
                setProduct(listProduct.data);
                setPagination(result.data.length);
                setBookType(bookType.data);
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
       
        const newFilter = {
            ...filter,
            _pageNumber: page,
        };
  
        setFilter(newFilter);
    };
    const handleTypeChange = (selectedType) => {

        const newFilter = {
            theloai: selectedType.map((type) => type.theloai),
        };

        setFilter(newFilter);
    };
    const handleFilterByPriceSubmit = (priceFilter, selectedTypes) => {
        // Kết hợp cả hai bộ lọc (theo giá và phân loại)
        const combinedFilter = {
            ...filter,
            ...priceFilter,
            theloai: selectedTypes.map((type) => type.theloai),
        };
        setFilter(combinedFilter);
    };

    return (
        <div>
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
                                            <div className="vstack gap-2">
                                                {bookType.map((type) => (
                                                    <div
                                                        key={type.theloai}
                                                        className="d-flex gap-2"
                                                    >
                                                        <Checkbox
                                                            {...label}
                                                            onChange={() => {
                                                                const priceFilter =
                                                                    {};
                                                                const isSelected =
                                                                    selectedTypes.some(
                                                                        (
                                                                            selected,
                                                                        ) =>
                                                                            selected.theloai ===
                                                                            type.theloai,
                                                                    );

                                                                let updatedSelectedTypes;

                                                                if (
                                                                    isSelected
                                                                ) {
                                                                    updatedSelectedTypes =
                                                                        selectedTypes.filter(
                                                                            (
                                                                                selected,
                                                                            ) =>
                                                                                selected.theloai !==
                                                                                type.theloai,
                                                                        );
                                                                } else {
                                                                    updatedSelectedTypes =
                                                                        [
                                                                            ...selectedTypes,
                                                                            type,
                                                                        ];
                                                                }

                                                                setSelectedTypes(
                                                                    updatedSelectedTypes,
                                                                );
                                                                handleFilterByPriceSubmit(
                                                                    priceFilter,
                                                                    updatedSelectedTypes,
                                                                );
                                                            }}
                                                        />
                                                        <label className="fw-medium flex-grow-1">
                                                            {type.theloai}
                                                        </label>
                                                    </div>
                                                ))}
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
                                        onSubmit={(priceFilter) =>
                                            handleFilterByPriceSubmit(
                                                priceFilter,
                                                selectedTypes,
                                            )
                                        }
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

                        <Stack spacing={2}>
                            <Pagination
                                count={Math.ceil(
                                    pagination / initialFilter._length,
                                )}
                                onChange={handlePageChange}
                            />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreProducts;
