import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountMenu from "../../components/account-menu";
import AddressView from "../../components/account/address-view";
import Layout from "../../components/layout";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import KhachApi from "../api/KhachApi";
const cities = ["Yangon", "Mandalay", "Kalaw"];

const states = ["Thar Kay Ta", "Daw Pon", "San Chaung"];

function Profile() {
    const { username } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [profile, setProfile] = useState([]);
    const [newHoten, setNewHoten] = useState("");
    const [newSdt, setNewSdt] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newDiachi, setNewDiachi] = useState("");
    const [newUser, setNewUser] = useState(username);
    const fetchData = async () => {
        const getdata = await KhachApi.getKHinfo(username);
        console.log(getdata.data[0]);
        setProfile(getdata.data[0]);
        setNewUser(getdata.data[0].username);
        setNewHoten(getdata.data[0].hoten || "");
        setNewSdt(getdata.data[0].sdt || "");
        setNewEmail(getdata.data[0].email || "");
        setNewDiachi(getdata.data[0].diachi || "");
    };
    useEffect(() => {
        fetchData();
    }, []);
    const password = profile ? profile.password : "";
    const makh = profile ? profile.makh : "";
    const handleUpdate = async () => {
        // Use values from local state
        const obj = {
            hoten: newHoten,
            sdt: newSdt,
            email: newEmail,
            diachi: newDiachi,
            makh: makh,
        };

        await KhachApi.updateKH(obj);
        await fetchData();
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
                username: newUser, // Assuming you have a newUsername state
            },
        });
        window.location.href = "/";
    };
    console.log(username);
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
                                                    Họ Tên
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={newHoten}
                                                    onChange={(e) =>
                                                        setNewHoten(
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={newUser}
                                                    disabled
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
                                                    defaultValue={password}
                                                />
                                            </div>
                                            <div className="col-md-12 mt-0">
                                                <label className="form-label">
                                                    Điện thoại
                                                </label>
                                                <div className="input-group">
                                                    {/* <div>
                                                        <select className="form-select rounded-0 rounded-start bg-light">
                                                            <option>+84</option>
                                                        </select>
                                                    </div> */}
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        defaultValue={newSdt}
                                                        onChange={(e) =>
                                                            setNewSdt(
                                                                e.target.value,
                                                            )
                                                        }
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
                                                    defaultValue={newEmail}
                                                    onChange={(e) =>
                                                        setNewEmail(
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">
                                                    Địa chỉ
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={newDiachi}
                                                    onChange={(e) =>
                                                        setNewDiachi(
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>
                                            {/* <div className="col-md-12">
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
                                            </div> */}
                                            {/* <div className="col-md-6">
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
                                            </div> */}

                                            <div className="col-md-12 mt-4">
                                                <button
                                                    className="btn btn-primary float-end"
                                                    onClick={handleUpdate}
                                                >
                                                    Cập nhật
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* <div className="card border-0 shadow-sm">
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
                                </div> */}
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
