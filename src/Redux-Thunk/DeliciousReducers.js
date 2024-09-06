const initialState = {
    loading: false,
    recdata: [],  // For category area
    recdata2: [], // For best recipes area
    recdata3: [], // For small recipes area
    error: ''
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        // Fetch Users
        case 'FETCH_USER_REQUEST1':
            return { ...state, loading: true };
        case 'FETCH_USER_SUCCESS1':
            return { ...state, loading: false, recdata: action.payload, error: '' };
        case 'FETCH_USER_FAILURE1':
            return { ...state, loading: false, recdata: [], error: action.payload };

        // Fetch Best Recipes
        case 'FETCH_BEST_REQUEST2':
            return { ...state, loading: true };
        case 'FETCH_BEST_SUCCESS2':
            return { ...state, loading: false, recdata2: action.payload, error: '' };
        case 'FETCH_BEST_FAILURE2':
            return { ...state, loading: false, recdata2: [], error: action.payload };

        // Fetch Small Recipes
        case 'FETCH_SMALL_REQUEST3':
            return { ...state, loading: true };
        case 'FETCH_SMALL_SUCCESS3':
            return { ...state, loading: false, recdata3: action.payload, error: '' };
        case 'FETCH_SMALL_FAILURE3':
            return { ...state, loading: false, recdata3: [], error: action.payload };

        default:
            return state;
    }
};

export default Reducer;
