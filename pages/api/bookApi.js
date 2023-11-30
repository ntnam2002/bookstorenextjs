import { axiosClient } from "./axiosApi";

const BookApi = {
    getAll() {
        const url = `/sach?start=0&length=8`;
        return axiosClient.get(url);
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
