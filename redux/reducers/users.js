import { GET_ALL_USERS, SEARCH_USERS, LOADING } from "../actions/types";

const initialState = {
    users: { results: [] },
    loading: true,
    search: ""
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS:
            console.log("Get All Called");
            return {
                ...state,
                users: action.payload,
                loading: action.loading
            };
        case SEARCH_USERS:
            return {
                ...state,
                users: {
                    results: state.users.results.filter(
                        user => action.payload == user.name
                    )
                },
                loading: action.loading
            };
        case LOADING:
            return {
                ...state,
                loading: action.loading
            };
        default:
            return state;
    }
}
