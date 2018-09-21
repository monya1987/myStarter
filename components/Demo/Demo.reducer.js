const initial = {
    aaa: 1,
    bbb: 2
};

const demo = (state = initial, action) => {
    switch (action.type) {
        case 'AAAA':
            return {
                ...state,
                aaa: 22
            };
        default:
            return state;
    }
};

export default demo;