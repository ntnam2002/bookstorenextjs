import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { Provider } from "react-redux";
import { store } from "./app/store";

function Layout({ simpleHeader, hideAuth, children }) {
    return (
        <>
            <Provider store={store}>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="description" content="Best e-commerce app" />
                    <link rel="icon" href="/favicon.ico" />
                    <title>Nhà sách Nguyễn Văn Cừ</title>
                </Head>
                <div className="d-flex flex-column">
                    <Header simple={simpleHeader} hideAuth={hideAuth} />
                    <main className="flex-shrink-0">{children}</main>
                    <Footer />
                </div>
            </Provider>
        </>
    );
}

export default Layout;
