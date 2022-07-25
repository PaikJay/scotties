import { combineReducers } from "redux";
import * as mutations from '../actions/types'

const initialState = {
    session:{},
    comments:[],
    users: [],
    groups:[],
    tasks:[],
}

export const rootReducer = combineReducers ({
 
    users:(users = initialState.users,action)=>{
        switch (action.type) {
            case mutations.SET_STATE:
                return action.state.users;
        }
        return users;
    },
    groups:(groups = initialState.groups,action)=>{
        switch (action.type) {
            case mutations.SET_STATE:
                return action.state.groups;
        }
        return groups;
    }
});

export default rootReducer;