import Link from "next/link";
import Layout from "../../components/layout";
import KhachApi from "../api/KhachApi";
import { useRouter } from "next/router";
import { useState } from "react";


const cities = ["Tokyo", "HN", "HCM"];

const states = [""];


function SignUp() {
    const router = useRouter();

    const [hoten, setHoten] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [sdt, setSdt] = useState('');
    const [email, setEmail] = useState('');
    const [diachi, setDiachi] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        try {
            // Gọi API đăng ký với dữ liệu từ state
            const response = await KhachApi.InsertKhach(hoten, username, password, sdt, email, diachi);
    
            if (response.status === 201) {
                // Đăng ký thành công, có thể chuyển hướng hoặc thông báo cho người dùng
                console.log('Đăng ký thành công');
                router.push('/account/profile');
            } else {
                // Xử lý lỗi đăng ký không thành công
                const data = await response.json();
                console.error('Đăng ký không thành công:', data.message);
                // You can also show a toast message here if you've implemented it
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi khi gọi API đăng ký:', error);
        }
    };

    return (
        <div className="container py-3">
            <div className="row my-4">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body px-4">
                            <h4 className="card-title fw-bold mt-2 mb-4">
                                Đăng ký
                            </h4>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Họ tên </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={hoten}
                                        onChange={(e) => setHoten(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Số điện thoại</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={sdt}
                                        onChange={(e) => setSdt(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Địa chỉ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={diachi}
                                        onChange={(e) => setDiachi(e.target.value)}
                                    />
                                </div>
                            

                                <div className="col-md-6">
                                    <label className="form-label">
                                        Mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                               
                                <div className="col-md-12 mt-4">
                                    <button 
                                        className="btn btn-primary w-100" 
                                        onClick={handleSignUp}>
                                            Đăng ký
                                    </button>
                                </div>
                                <div className="col-md-12">
                                    <div className="text-muted bg-light rounded p-3 border small">
                                        Với việc nhấn vào nút &lsquo;Đăng ký&lsquo;
                                        bạn đã chấp nhận với các điều khoản của chúng tôi {" "}
                                        <a href="#">
                                            Terms of use and Privacy Policy
                                        </a>
                                        .
                                    </div>
                                </div>
                            </form>
                            <hr className="text-muted" />
                            <div className="text-center">
                                Đã có tài khoản ?{" "}
                                <Link
                                    href="/auth/login"
                                    className="text-decoration-none fw-medium"
                                >
                                    Đăng nhập
                                </Link>
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

SignUp.getLayout = (page) => {
    return (
        <Layout simpleHeader hideAuth>
            {page}
        </Layout>
    );
};

export default SignUp;
