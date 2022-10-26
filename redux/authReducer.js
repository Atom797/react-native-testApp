import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA';
const EXIT_USER_DATA = 'EXIT_USER_DATA';

let initialState = {
    id: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case EXIT_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
};

export const setAuthUserData = (id, login, isAuth) => ({ type: SET_USER_DATA, data: { id, login, isAuth } });
export const exitAuthUserData = () => ({ type: EXIT_USER_DATA, data: { id:null, login:null, isAuth:false } });

export const login = (authUser) => {
    let {login, password} = authUser;
    return async (dispatch) => {
        let response = await authAPI.login(login, password);
        if (response.login) {
            let {login, password} = response; 
            dispatch(setAuthUserData(1, login, true))
            console.log(login, password)
        } else {
            console.log("Some error auth")
        }
    }
}

export default authReducer;
