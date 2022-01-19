import {createStore} from "redux"
import rootReducer from "./slices";

const store = createStore({
    reducer: rootReducer
})

export default store;