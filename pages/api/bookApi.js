import { axiosClient } from "./axiosApi";

const BookApi = {
    getAll() {
        const url = `/sach?start=0&length=8`;
        return axiosClient.get(url);
    },
    get5BookSameType(theloai) {
        const url = `/sach/Search?start=0&length=3`;
        return axiosClient.post(
            url,
            {
                theloai: [theloai],
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
    },
    getAllBook(filter) {
        const start = filter._start || 0;
        const length = filter._length || 10;
        const url = `/sach?start=${start}&length=${length}`;
        return axiosClient.get(url);
    },
    getSearch() {
        const url = `/sach/Search`;
        return axiosClient.get(url);
    },
    getbookDetails(masp) {
        const url = `/sach/Search`;
        return axiosClient.post(
            url,
            {
                masp: masp,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
    },
    getBooktype() {
        const url = `/sach/theloai`;
        return axiosClient.get(url);
    },
    getBookByTypeAndPrice(params) {
        const min = parseInt(params.minPrice) || 0;
        const max = parseInt(params.maxPrice) || 5000000;
        const theloai = params.theloai || [];
        const url = "/sach/Search";

        return axiosClient.post(
            url,
            {
                minPrice: min,
                maxPrice: max,
                theloai: theloai,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
    },

    getListProductInPrice(params) {
        const min = parseInt(params.minPrice) || 0;
        const max = parseInt(params.maxPrice) || 5000000;
        const url = "/sach/Search";

        return axiosClient.post(
            url,
            {
                minPrice: min,
                maxPrice: max,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
    },
};
export default BookApi;
