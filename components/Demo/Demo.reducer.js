const initial = {
    data: [],
    loading: false,
};

const demo = (state = initial, action) => {
    switch (action.type) {
        case 'RECORDS/FETCH':
        case 'RECORDS/FETCH_FAILED':
            return {
                ...state,
                loading: true,
                data: []
            };
        case 'RECORDS/SET':
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state;
    }
};

export default demo;