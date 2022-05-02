const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DESTINATION':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        default:
            return state;
    }
};

export default Reducer;