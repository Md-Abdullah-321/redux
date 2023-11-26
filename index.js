const { createStore, combineReducers } = require("redux");

//product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT"; 


//cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS"; 

// Product states
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2,
}

// Cart states
const initialCartState = {
    products: ["sugar"],
    numberOfProducts: 1,
}

//Product actions
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

//Cart actions
const getCart = () => {
    return {
        type: GET_CART_ITEMS,
    }
}
const addCart = (product) => {
    return {
        type: ADD_CART_ITEMS,
        payload: product
    }
}

//product reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
             }
        default:
            return state;
    }
}


//cartReducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_CART_ITEMS:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
             }
        default:
            return state;
    }
}


//root reducer
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

//store product
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("pen"));

store.dispatch(getCart());
store.dispatch(addCart("pen"));

