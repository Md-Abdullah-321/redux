//reducer
//store

const { createStore } = require("redux");

//CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";


//state - count
const initialState = {
    count: 0
}



//action - increment, decrement, reset
const incrementAction = () => {
    return {
        type: INCREMENT
    }
}
const deccrementAction = () => {
    return {
        type: DECREMENT
    }
}
const resetAction = () => {
    return {
        type: RESET
    }
}


//reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT: 
            return {
                ...state,
                count: state.count - 1 
            };
        case RESET: 
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
}

//store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(deccrementAction());
store.dispatch(resetAction());