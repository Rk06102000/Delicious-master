export const fetchUserRequest = () => ({ type: "FETCH_USER_REQUEST1" });
export const fetchUserSuccess = (users) => ({ type: "FETCH_USER_SUCCESS1", payload: users });
export const fetchUserFailure = (error) => ({ type: "FETCH_USER_FAILURE1", payload: error });

export const fetchBestRequest = () => ({ type: "FETCH_BEST_REQUEST2" });
export const fetchBestSuccess = (best) => ({ type: "FETCH_BEST_SUCCESS2", payload: best });
export const fetchBestFailure = (error) => ({ type: "FETCH_BEST_FAILURE2", payload: error });

export const fetchSmallRequest = () => ({ type: "FETCH_SMALL_REQUEST3" });
export const fetchSmallSuccess = (small) => ({ type: "FETCH_SMALL_SUCCESS3", payload: small });
export const fetchSmallFailure = (error) => ({ type: "FETCH_SMALL_FAILURE3", payload: error });

export const fetchAllreceipe = () => {
    // Small
    return (dispatch) => {
        dispatch(fetchSmallRequest());
        fetch("https://dummyjson.com/recipes")
            .then((response) => response.json())
            .then((small) => dispatch(fetchSmallSuccess(small.recipes)))
            .catch((error) => dispatch(fetchSmallFailure(error.message)));
    };
};

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        fetch("https://dummyjson.com/recipes/search?q=Margherita")
            .then((response) => response.json())
            .then((data) => dispatch(fetchUserSuccess(data.recipes))) // Ensure you are dispatching data.recipes
            .catch((error) => dispatch(fetchUserFailure(error.message)));
    };
};

export const fetchBest = () => {
    return (dispatch) => {
        dispatch(fetchBestRequest());
        fetch("https://dummyjson.com/recipes/tag/indian")
            .then((response) => response.json())
            .then((data) => dispatch(fetchBestSuccess(data.recipes)))
            .catch((error) => dispatch(fetchBestFailure(error.message)));
    };
};
