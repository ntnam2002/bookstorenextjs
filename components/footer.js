import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Footer() {
    return (
        <div className="vstack mt-auto">
            <footer className="py-4 bg-primary">
                <div className="container py-3">
                    <div className="row g-3">
                        <div className="col-md-6 col-lg-4 d-none d-md-block">
                            <h5 className="text-light">Liên hệ chúng tôi</h5>
                            <div className="vstack gap-1">
                                <p className="mb-2 text-light text-opacity-75 small">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer in feugiat lorem.
                                </p>
                                <small className="d-flex text-light text-opacity-75 gap-2">
                                    <FontAwesomeIcon
                                        icon={["fas", "map-marker"]}
                                        className="mt-1"
                                    />
                                    <div>57 Triều Khúc,Thanh Xuân ,Hà Nội</div>
                                </small>
                                <small className="d-flex text-light text-opacity-75 gap-2">
                                    <FontAwesomeIcon
                                        icon={["fas", "envelope"]}
                                        className="mt-1"
                                    />
                                    <div>NTN2002@gmail.com</div>
                                </small>
                                <small className="d-flex text-light text-opacity-75 gap-2">
                                    <FontAwesomeIcon
                                        icon={["fas", "phone"]}
                                        className="mt-1"
                                    />
                                    <div>(+84) 989999999</div>
                                </small>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 d-none d-md-block">
                            <h5 className="text-light">Thông tin</h5>
                            <div className="vstack small gap-2">
                                <a href="#" className="footer-link">
                                    Về Chúng tôi
                                </a>
                                <a href="#" className="footer-link">
                                    Tìm cửa hàng
                                </a>
                                <a href="#" className="footer-link">
                                    Điều khoản và điều kiện
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 d-none d-md-block">
                            <h5 className="text-light">Account</h5>
                            <div className="vstack small gap-2">
                                <Link
                                    href="/auth/login"
                                    className="footer-link"
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    href="/auth/sign-up"
                                    className="footer-link"
                                >
                                    Đăng kí
                                </Link>
                                <Link
                                    href="/account/profile"
                                    className="footer-link"
                                >
                                    Tài khoản của tôi
                                </Link>
                                <Link
                                    href="/account/current-orders"
                                    className="footer-link"
                                >
                                    Đơn hàng của tôi
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <h5 className="text-light text-center text-md-start">
                                Thông tin liên hệ
                            </h5>
                            <div className="text-light text-opacity-75 mb-3 small text-center text-md-start">
                                Đăng kí để nhận ưu đãi
                            </div>
                            <form className="hstack gap-2 justify-content-center justify-content-md-start mb-3">
                                <div>
                                    <input
                                        type="email"
                                        className="form-control border border-primary"
                                        placeholder="Email của bạn"
                                    />
                                </div>
                                <button className="btn btn-warning">Gửi</button>
                            </form>
                            <div className="hstack gap-2 justify-content-center justify-content-md-start">
                                <a href="#" className="text-decoration-none">
                                    <img
                                        src="/images/apple-app-store-badge.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#" className="text-decoration-none">
                                    <img
                                        src="/images/google-play-badge.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4 bg-primary-dark">
                <div className="container d-flex">
                    <span className="text-light text-opacity-50 my-auto">
                        &copy; {new Date().getFullYear()} HHHN mart
                    </span>
                    <div className="ms-auto hstack gap-4">
                        <a href="#" className="ms-auto link-light">
                            <FontAwesomeIcon
                                icon={["fab", "facebook-f"]}
                                size="lg"
                            />
                        </a>
                        <a href="#" className="ms-auto link-light">
                            <FontAwesomeIcon
                                icon={["fab", "twitter"]}
                                size="lg"
                            />
                        </a>
                        <a href="#" className="ms-auto link-light">
                            <FontAwesomeIcon
                                icon={["fab", "instagram"]}
                                size="lg"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
