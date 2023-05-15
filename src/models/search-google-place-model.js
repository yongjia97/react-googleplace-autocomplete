const initialState = {
    searchHistory: {},
    address: {}
};

export default {
    state: initialState,
    reducers: {
        setSearchHistory(state, payload) {
            const currentSearchHistory = Object.assign(
                {},
                state.searchHistory
            );
            console.log('currentSearchHistory',currentSearchHistory)
            const { address_label,address} = payload;
            if(currentSearchHistory&&currentSearchHistory[address_label]){
                delete currentSearchHistory[address_label];
            }else{
                currentSearchHistory[address_label] = address;
            }
            return {
                ...state,
                searchHistory: currentSearchHistory
            };
        },
        setAddress(state, payload) {
            return {
                ...state,
                address: payload
            };
        },
    },
};