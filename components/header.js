import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
// import { useSelector } from "react-redux";
import { cartItemCountSelector } from "./product/selectors";
import { Badge, ShoppingCart, SmartButtonOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import { store } from "../components/app/store";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, logout } from "../pages/auth/authActions.js";

function Header({ simple, hideAuth }) {
    
    let title = process.env.APP_NAME;
    const cartItemCount = useSelector(cartItemCountSelector);
    console.log("sth", cartItemCount);
    const router = useRouter();
    const handleCartItem = (event) => {
        event.preventDefault();
        router.push("/shopping-cart");
    };

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const handleLogin = () => {
        // Thực hiện đăng nhập thành công
        // Sau khi gọi API đăng nhập thành công
        // Gọi dispatch(loginSuccess()) để cập nhật trạng thái đăng nhập
        dispatch(loginSuccess());
      };
    
      const handleLogout = () => {
        // Thực hiện đăng xuất
        // Gọi dispatch(logout()) để cập nhật trạng thái đăng nhập
        dispatch(logout());
      };
    

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container" style={{ zIndex: 1000000 }}>
                    <Link href="/" className="navbar-brand" passHref>
                        <span className="ms-2 mb-0 h4 text-primary fw-bold">
                            Nhà Sách Nguyễn Văn Cừ
                        </span>
                    </Link>
                    <div className="collapse navbar-collapse">
                        <form className="d-flex">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search..."
                                    aria-label="Search"
                                    size="32"
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    <FontAwesomeIcon icon={["fas", "search"]} />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex">
                    {!hideAuth && (
                        <>
                        {isLoggedIn ? (
                            <Button onClick={handleLogout}>
                            Đăng xuất
                            </Button>
                        ) : (
                            <>
                            <Link
                                href="/auth/login"
                                className="btn btn-outline-primary d-none d-md-block"
                                onClick={handleLogin}
                            >
                                Login
                            </Link>
                            <Link
                                href="/auth/sign-up"
                                className="btn btn-primary d-none d-md-block ms-2"
                            >
                                Đăng ký
                            </Link>
                            </>
                        )}
                        </>
                    )}
                        <Button onClick={handleCartItem}>
                            <badge color="error" badgeContent={cartItemCount}>
                                <ShoppingCart />
                            </badge>
                        </Button>
                        {/* <Badge color="error">
                            <ShoppingCart onClick={handleCartItem} />
                            {cartItemCount !== null && (
                                <span style={{ marginLeft: "4px" }}>
                                    {cartItemCount}
                                </span>
                            )}
                        </Badge> */}
                    </div>
                </div>
            </nav>
            {!simple && (
                <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                    <div className="container">
                        <button
                            className="navbar-toggler ms-auto"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavDropdown"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link href="/explore" className="nav-link">
                                        Danh mục
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/explore" className="nav-link">
                                        Sách Trinh Thám
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/explore" className="nav-link">
                                        Truyện Tranh
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/explore" className="nav-link">
                                        Sách giáo khoa
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/explore" className="nav-link">
                                        Tiểu thuyết
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;
