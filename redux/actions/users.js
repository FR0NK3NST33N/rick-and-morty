import { GET_ALL_USERS, SEARCH_USERS, LOADING } from "./types";
import userService from "../services/userService";

export const getAll = () => dispatch => {
    dispatch({
        type: LOADING,
        loading: true
    });
    userService
        .getAll()
        .then(data => {
            dispatch({
                type: GET_ALL_USERS,
                payload: data,
                loading: false
            });
        })
        .catch(err => {
            console.log(err);
        });
};

export const search = search => dispatch => {
    if (search == "") {
        dispatch(getAll());
    } else {
        dispatch({
            type: LOADING,
            loading: true
        });
        dispatch({
            type: SEARCH_USERS,
            payload: search,
            loading: false
        });
    }
};
