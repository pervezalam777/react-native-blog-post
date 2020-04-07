// TODO: Replace call back with promise api..

import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const ADD_POST = 'add_post';
const UPDATE_POST = 'edit_post';
const DELETE_POST = 'delete_post';
const GET_POSTS = 'get_posts';

const blogReducer = (state, {type, payload}) => {
    switch(type) {
        case ADD_POST:
            return [...state, {
                ...payload
            }]
        case UPDATE_POST:
            return state.map(post => {
                return (post.id == payload.id)
                    ? payload
                    : post
            })
        case DELETE_POST:
            return state.filter(post => post.id !== payload)
        case GET_POSTS:
            return payload;
        default:
            return state;
    }
}

const getBlogPost = dispatch => {
    return async () => {
        try {
            const response = await jsonServer.get('/blogposts');
            console.log("eeeee....")
            dispatch({type: GET_POSTS, payload:response.data});
        } catch(err){
            console.log('something went wrong....')
            dispatch({type: GET_POSTS, payload:[{id:'2', title:'Dummy title', content:'Dummy content'}]});
        }
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        try {
            const response = await jsonServer.post('/blogposts', {title, content});
            dispatch({type:ADD_POST, payload:response.data})
            if(callback){
                callback();
            }
        } catch(err) {
            console.log("something went wrong..");
        }
    }
}

const updateBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        const response = await jsonServer.put(`/blogposts/${id}`, {title, content})
        dispatch({type:UPDATE_POST, payload:{id, title, content}})
        if(callback){
            callback();
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        const response = await jsonServer.delete(`/blogposts/${id}`)
        console.log('response ', response);
        dispatch({type:DELETE_POST, payload:id})
    }
}

export const {Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost, updateBlogPost, deleteBlogPost, getBlogPost},
    //[{id:'2', title:'Dummy title', content:'Dummy content'}],
    [],
    'blogState'
)
