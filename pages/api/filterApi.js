import { axiosClient } from "./axiosApi";

const FilterApi = {
    getAll() {
        const url = `/sach/Search`;
        return axiosClient.get(url);
    },
    getListPrice(params) {
        const minPrice = params._minPrice || 0;
        const maxPrice = params._maxPrice || 0;
        const url = "/sach/Search";
        return axiosClient.get(url, {
            data: { minPrice, maxPrice },
        });
    },
};
export default FilterApi;
