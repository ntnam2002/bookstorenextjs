import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountMenu from "../../components/account-menu";
import AddressView from "../../components/account/address-view";
import Layout from "../../components/layout";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useState, useEffect  } from "react";

const cities = ["Yangon", "Mandalay", "Kalaw"];

const states = ["Thar Kay Ta", "Daw Pon", "San Chaung"];

function Profile() {
    const router = useRouter();

    const makh = useSelector(state => state.auth.makh);

    // Hàm xử lý sự kiện khi người dùng nhấp vào nút "Chỉnh sửa"
    const handleEditProfile = async () => {
        try {
            // Gọi API để lấy thông tin khách hàng dựa trên makh
            const response = await EditIFKhach({makh});

            if (response.status) {
                // Lấy thông tin khách hàng từ dữ liệu trả về
                const khachHang = response.data;

                // Chuyển hướng đến trang chỉnh sửa thông tin khách hàng và truyền dữ liệu của khách hàng
                router.push({
                    pathname: "/account/edit-profile",
                    query: { makh: khachHang.makh, hoten: khachHang.hoten, /* thêm các trường dữ liệu khác nếu cần */ },
                });
            } else {
                // Xử lý khi gặp lỗi khi gọi API
                console.error("Lỗi khi gọi API EditIFKhach");
            }
        } catch (error) {
            // Xử lý khi gặp lỗi khác
            console.error("Đã xảy ra lỗi:", error);
        }
    };

    // Gọi hàm xử lý sự kiện khi trang Profile được tải
    useEffect(() => {
        handleEditProfile();
    }, []);
    
    return (
        <div>
            <div className="bg-secondary">
                <div className="container">
                    <div className="row py-4 px-2">
                        <nav aria-label="breadcrumb col-12">
                            <ol className="breadcrumb mb-1">
                                <li className="breadcrumb-item">
                                    <a href="#">Trang chủ</a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Hồ sơ của tôi
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="row g-3">
                    <div className="col-lg-3">
                        <AccountMenu current="profile" />
                    </div>
                    <div className="col-lg-9">
                        <div className="row g-3">
                            <div className="col-lg-9">
                                <div className="card border-0 shadow-sm mb-3">
                                    <div className="card-body">
                                        <h4 className="card-title fw-semibold mt-2 mb-3">
                                            Profile
                                        </h4>
                                        <form className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Tên
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Mật khẩu
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control bg-light"
                                                    disabled
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-link float-end p-0 text-decoration-none"
                                                >
                                                    Đổi mật khẩu
                                                </button>
                                            </div>
                                            <div className="col-md-12 mt-0">
                                                <label className="form-label">
                                                    Điện thoại
                                                </label>
                                                <div className="input-group">
                                                    <div>
                                                        <select className="form-select rounded-0 rounded-start bg-light">
                                                            <option>+84</option>
                                                        </select>
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                    />
                                                    <label className="form-check-label">
                                                        Nam
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                    />
                                                    <label className="form-check-label">
                                                        Nữ
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Thành Phố
                                                </label>
                                                <select className="form-select">
                                                    {cities.map((e, i) => {
                                                        return (
                                                            <option key={i}>
                                                                {e}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>

                                            <div className="col-md-12 mt-4">
                                                <button className="btn btn-primary float-end">
                                                    Cập nhật
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="card border-0 shadow-sm">
                                    <div className="p-3 d-flex border-bottom">
                                        <h5 className="my-auto fw-semibold">
                                            Địa chỉ
                                        </h5>
                                        <button className="btn btn-sm btn-secondary text-primary ms-auto">
                                            <FontAwesomeIcon
                                                icon={["fas", "plus"]}
                                            />
                                            &nbsp;Thêm mới
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <div className="row row-cols-1 row-cols-lg-2 g-3">
                                            <div className="col">
                                                <AddressView />
                                            </div>
                                            <div className="col">
                                                <AddressView />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3"></div>
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

Profile.getLayout = (page) => {
    return <Layout simpleHeader>{page}</Layout>;
};

export default Profile;
