import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import rootReducer from "./reducers/index";


const store = configureStore({
    reducer: {
     rootReducer
    }
}, applyMiddleware(logger,thunk))

export default store