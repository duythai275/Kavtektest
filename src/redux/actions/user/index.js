import {
    GET_ALL_USERS
} from "./type";

export const getUsers = users => ({
    type: GET_ALL_USERS,
    payload: users
});