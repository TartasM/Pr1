import {usersAPI} from "../api/api";

const ADD_POST = 'ADD--POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let inicialState = {
    posts: [
        {id: 1, message: 'Hi, i im funnnnnny', likesCount: 55},
        {id: 2, message: 'hello, its my first post', likesCount: 40},
        {id: 3, message: 'balablabla', likesCount: 30},
        {id: 4, message: 'yoyoyoy', likesCount: 60},
    ],
    newPostText: 'Hello from profilePage ',
    profile: null
};
const profileReducer = (state = inicialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case ADD_POST:
            let text = state.newPostText
            return {
                ...state, newPostText: ' ', posts: [...state.posts, {id: 5, message: text, likesCount: 0}]
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then (response => {dispatch (setUserProfile (response.data));

        });
     }

export default profileReducer;