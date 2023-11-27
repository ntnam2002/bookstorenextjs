import { axiosClient } from "./axiosApi";

const BookApi = {
    getAll() {
        const url = `/sach?start=0&length=8`;
        return axiosClient.get(url);
    },
    getAllBook(params) {
        console.log(params);
        const _start = params._start;
        const _length = params._length;
        const url = `/sach?start=${_start}&length=${_length}`;
        return axiosClient.get(url);
    },
};
export default BookApi;
