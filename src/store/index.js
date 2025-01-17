


import { applyMiddleware, createStore} from "redux"
import {thunk} from "redux-thunk"



const initialStore = {
    allDataUser :[]
}

const reducer = (state = initialStore, action) => {
console.log(action);
switch (action.type) {
    case "GET_ALL_DATA":
        
       return {...state, allDataUser: action.payload}

    default:
        return state
}





}
let store = createStore(reducer, applyMiddleware(thunk))
    
export default store