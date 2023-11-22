import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Layout from "../../components/layout";

function ForgotPassword() {
    return (
        <div className="container py-3">
            <div className="row my-4">
                <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body px-4">
                            <h4 className="card-title fw-bold mt-2 mb-3">
                                Quên mật khẩu
                            </h4>
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label className="form-label">
                                        Địa chỉ email của bạn
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="name@gmail.com"
                                    />
                                </div>
                                <div className="col-md-12 mt-3">
                                    <button className="btn btn-primary w-100">
                                        Đặt lại
                                    </button>
                                </div>
                                <div className="col-md-12">
                                    <div className="border border-1 rounded bg-light px-3 py-2 small">
                                        Mật khẩu đặt lại sẽ được gửi đến địa chỉ
                                        email của bạn.
                                    </div>
                                </div>
                            </form>
                        </div>
                        <hr className="text-muted my-0" />
                        <div className="text-center p-3">
                            Không có tài khoản ?{" "}
                            <Link
                                href="/auth/sign-up"
                                className="text-decoration-none fw-medium"
                            >
                                Đăng kí
                            </Link>
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

ForgotPassword.getLayout = (page) => {
    return (
        <Layout simpleHeader hideAuth>
            {page}
        </Layout>
    );
};

export default ForgotPassword;
