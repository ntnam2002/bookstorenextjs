import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductRating from "../../components/product-rating";
import ProductSimpleHorizontal from "../../components/product/product-simple-horizontal";

function ProductDetail() {
    const images = [2, 4, 6, 8, 1];

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
                                    Tên hàng
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
                                            src={``}
                                            width={300}
                                            height={300}
                                            alt="Product image."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3 d-none d-lg-block">
                                <div className="col-12 d-flex justify-content-center">
                                    {images.map((e) => {
                                        return (
                                            <div
                                                key={e}
                                                style={{ width: 60 }}
                                                className="me-2 ratio ratio-1x1"
                                            >
                                                <img
                                                    className="rounded"
                                                    src={``}
                                                    width={60}
                                                    height={60}
                                                    alt="Product image."
                                                    key={e}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="d-flex">
                                <div className="d-inline h2 mb-0 fw-semibold me-3">
                                    Tên Hàng
                                </div>
                                <div className="ms-auto">
                                    <button
                                        className="btn btn-outline-secondary text-primary border"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Add to wish list"
                                    >
                                        <FontAwesomeIcon
                                            icon={["far", "heart"]}
                                            size="lg"
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className="vstack">
                                <div className="d-flex mb-3 gap-2">
                                    <ProductRating />
                                    <span className="text-muted small">
                                        150 Đã mua
                                    </span>
                                    <span className="text-success small">
                                        <FontAwesomeIcon
                                            icon={["fas", "check-circle"]}
                                        />
                                        &nbsp;Còn Hàng
                                    </span>
                                </div>
                                <h4 className="fw-semibold">15000Ks</h4>
                                <p className="fw-light">
                                    Lorem ipsum is placeholder text commonly
                                    used in the graphic, print, and publishing
                                    industries for previewing layouts and visual
                                    mockups.
                                </p>
                                <dl className="row mb-0">
                                    <dt className="col-sm-3 fw-semibold">
                                        Code#
                                    </dt>
                                    <dd className="col-sm-9">10001</dd>
                                    <dt className="col-sm-3 fw-semibold">
                                        Danh Mục
                                    </dt>
                                    <dd className="col-sm-9">Sách</dd>
                                    <dt className="col-sm-3 fw-semibold">
                                        Vận chuyển
                                    </dt>
                                    <dd className="col-sm-9">VN</dd>
                                </dl>
                                <hr className="text-muted" />

                                <div className="d-flex">
                                    <a
                                        href="#"
                                        className="btn btn-primary px-md-4 col col-md-auto me-2"
                                    >
                                        Mua ngay
                                    </a>
                                    <button className="btn btn-outline-primary col col-md-auto">
                                        <FontAwesomeIcon
                                            icon={["fas", "cart-plus"]}
                                        />
                                        &nbsp;Thêm vào giỏ
                                    </button>
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
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Đặc trưng
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Duis ultricies lacus sed turpis tincidunt.
                                    Urna cursus eget nunc scelerisque. Sit amet
                                    massa vitae tortor condimentum. Amet est
                                    placerat in egestas erat. Vel quam elementum
                                    pulvinar etiam non quam lacus suspendisse
                                    faucibus. Duis at consectetur lorem donec
                                    massa sapien faucibus. Leo integer malesuada
                                    nunc vel risus commodo viverra maecenas.
                                    Pellentesque eu tincidunt tortor aliquam
                                    nulla facilisi. Gravida in fermentum et
                                    sollicitudin ac. Amet purus gravida quis
                                    blandit turpis cursus in hac habitasse.
                                    Augue mauris augue neque gravida in
                                    fermentum et sollicitudin. Faucibus in
                                    ornare quam viverra. Nisl rhoncus mattis
                                    rhoncus urna neque viverra justo. Cras
                                    semper auctor neque vitae. Nulla facilisi
                                    morbi tempus iaculis. Quam vulputate
                                    dignissim suspendisse in. Vestibulum rhoncus
                                    est pellentesque elit ullamcorper.
                                    Suspendisse ultrices gravida dictum fusce
                                    ut. Lacus vel facilisis volutpat est velit
                                    egestas.
                                </p>
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
                                <ProductSimpleHorizontal id={1} />
                                <ProductSimpleHorizontal id={2} />
                                <ProductSimpleHorizontal id={3} />
                                <ProductSimpleHorizontal id={4} />
                                <ProductSimpleHorizontal id={5} />
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
