import { combineReducers } from "redux";
import * as mutations from '../actions/types'

const initialState = {
    session:{},
    comments:[],
    users:[],
    groups:[],
    tasks:[{
        name:"Refactor tests",
        id:"T1",
        group:"G1",
        owner:"U1",
        isComplete:false,
    },{
        name:"Meet with CTO",
        id:"T2",
        group:"G1",
        owner:"U1",
        isComplete:true,
    },{
        name:"Compile ES6",
        id:"T3",
        group:"G2",
        owner:"U2",
        isComplete:false,
    },{
        name:"Update component snapshots",
        id:"T4",
        group:"G2",
        owner:"U1",
        isComplete:true,
    },{
        name:"Production optimizations",
        id:"T5",
        group:"G3",
        owner:"U1",
        isComplete:false,
    }],
}

export const rootReducer = combineReducers ({
    session(userSession = initialState.session,action){
        let {type,authenticated, session} = action;
        switch(type){
            case mutations.SET_STATE:
                return {...userSession, id: action.state.session.id};
            case mutations.REQUEST_AUTHENTICATE_USER:
                return {...userSession, authenticated:mutations.AUTHENTICATING};
            case mutations.PROCESSING_AUTHENTICATE_USER:
                return {...userSession, authenticated};
            default:
                return userSession;
        }
    },
    comments:(comments = initialState.comments,action)=>{
        switch (action.type) {
            case mutations.ADD_TASK_COMMENT:
                let {type,owner,task,content,id} = action;
                return [...comments,{owner,task,content,id}];
            case mutations.SET_STATE:
                return action.state.comments;
        }
        return comments;
    },
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
    },
    tasks(tasks = initialState.tasks,action){
        switch(action.type) {
            case mutations.SET_STATE:
                return action.state.tasks;
            case mutations.SET_TASK_COMPLETE:
                return tasks.map(task=>{
                    return (task.id === action.taskID) ? {...task,isComplete:action.isComplete} : task;
                });
            case mutations.SET_TASK_GROUP:
                return tasks.map(task=>{
                    return (task.id === action.taskID) ? {...task, group:action.groupID} : task;
                });
            case mutations.SET_TASK_NAME:
                return tasks.map(task=> {
                    return (task.id === action.taskID) ? {...task, name: action.name} : task;
                });
            case mutations.CREATE_TASK:
                return [...tasks,{
                    id:action.taskID,
                    name:"New Task",
                    group:action.groupID,
                    owner:action.ownerID,
                    isComplete:false
                }]
        }
        return tasks;
    }
});

export default rootReducer;