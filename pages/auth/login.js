import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layout";

function Login() {
    const router = useRouter();
    return (
        <div className="container py-3">
            <div className="row my-4">
                <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body px-4">
                            <h4 className="card-title fw-bold mt-2 mb-4">
                                Đăng Nhập
                            </h4>
                            <form className="row g-2">
                                <div className="col-md-12">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="name@domain.com"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">
                                        Mật Khẩu
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <Link
                                        href="/auth/forgot-password"
                                        className="text-decoration-none"
                                    >
                                        Quên mật khẩu
                                    </Link>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <button
                                        type="button"
                                        className="btn btn-primary w-100"
                                        onClick={() => {
                                            router.push({
                                                pathname: "/account/profile",
                                            });
                                        }}
                                    >
                                        Đăng nhập
                                    </button>
                                </div>
                                <div className="col-md-12">
                                    <div className="row g-2">
                                        <div className="col">
                                            <hr className="text-muted" />
                                        </div>
                                        <div className="col-auto align-self-center text-muted">
                                            hoặc tiếp tục với
                                        </div>
                                        <div className="col">
                                            <hr className="text-muted" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="hstack gap-2 justify-content-center">
                                        <button className="btn-facebook rounded-circle">
                                            <FontAwesomeIcon
                                                icon={["fab", "facebook-f"]}
                                            />
                                        </button>
                                        <button className="btn-google rounded-circle">
                                            <FontAwesomeIcon
                                                icon={["fab", "google"]}
                                            />
                                        </button>
                                        <button className="btn-apple rounded-circle">
                                            <FontAwesomeIcon
                                                icon={["fab", "apple"]}
                                            />
                                        </button>
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

Login.getLayout = (page) => {
    return (
        <Layout simpleHeader hideAuth>
            {page}
        </Layout>
    );
};

export default Login;
