import { Types } from './types'
//import { handleError, handleResponse } from "../../server/api/apiUtils";
// import axios from "axios";
import uuid from 'uuid';

export const addProfile = (user) => ({
    type: Types.ADD_USER,
    payload: {user}
})

export const updateProfileImage = (image) => ({
    type: Types.UPDATE_PROFILE_PICTURE,
    payload: {image}
})

export const updateProfile = (user) => ({
    type: Types.UPDATE_USER,
    payload: {user}
})

export const formSubmitionStatus = (status) => ({
    type: Types.FORM_SUBMITION_STATUS,
    payload: {status}
})

export const login = (user) => ({
    type: Types.LOGIN,
    payload: {user}
})
export const requestTaskCreation = (groupID) => ({
    type: Types.REQUEST_TASK_CREATION,
    groupID
})

export const requestCreateUserAccount = (username,password)=>({
    type:Types.REQUEST_USER_ACCOUNT_CREATION,
    username,
    password
});

export const requestAuthenticateUser = (username, password)=>({
    type:Types.REQUEST_AUTHENTICATE_USER,
    username,
    password
});

// USER LOGIN ACTIONS
export async function loadUsers() {
    console.info("load users",{uuid})
   return (dispatch) => {
       dispatch(login())
   }
};

export async function userLogin(username,password) {
    debugger
    return (dispatch) => {
      dispatch(requestAuthenticateUser(username,password))

    }
};

export default function createUserAccount(username, password) {
    return (dispatch) => {

    }
};
