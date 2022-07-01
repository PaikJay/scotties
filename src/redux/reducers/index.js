import { combineReducers } from "redux";
const initialState = {
    session: {},
    tasks: {},
    users: {},
    groups: {}
}

export const rootReducer = combineReducers ({
    session(userSession = initialState.session, action){
        let {type,authenticated, session} = action;
        switch(type){
            // case Types.SET_STATE:
            //     return {...userSession, id: action.state.session.id};
            // case Types.REQUEST_AUTHENTICATE_USER:
            //     return {...userSession, authenticated:Types.AUTHENTICATING};
            // case Types.PROCESSING_AUTHENTICATE_USER:
            //     return {...userSession, authenticated};
            default:
                return userSession;
        }
    },
    users:(users = initialState.users,action)=>{
        switch (action.type) {
           
        }
        return users;
    
}});

export default rootReducer;