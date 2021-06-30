import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let inicialState = {
    initialized: false
};

const appReducer = (state = inicialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
});


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //dispatch promise 1
    //dispatch promise2
    Promise.all([promise]).then(()=> {
        dispatch(initializedSuccess());
    });
}




/*
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }else{
                let message = response.data.messages.length > 0 ? response.data.messages[0]: "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
            /!*if (response.data.resultCode === 10) {

                dispatch(captcha());
            }*!/
        });
}
*/

/*export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false,));
            }
        });
}*/
/*export const captcha = () => (dispatch) => {
    authAPI.captcha()
        .then(response => {
            let url = response.data.url;
            dispatch(CaptchaOne(url));

        });
}*/
export default appReducer;