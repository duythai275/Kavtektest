import {
    GET_ALL_SALES
} from "./type";

export const getSales = sales => ({
    type: GET_ALL_SALES,
    payload: sales
})