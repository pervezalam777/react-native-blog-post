import createDataContext from "./createDataContext";

const ADD_POST = 'add_post';
const UPDATE_POST = 'edit_post';
const DELETE_POST = 'delete_post';

const blogReducer = (state, {type, payload}) => {
    switch(type) {
        case ADD_POST:
            return [...state, {
                id: ''+Math.ceil(Math.random()*9999),
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
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type:ADD_POST, payload:{title, content}})
        if(callback){
            callback();
        }
    }
}

const updateBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type:UPDATE_POST, payload:{id, title, content}})
        if(callback){
            callback();
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type:DELETE_POST, payload:id})
    }
}

export const {Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost, updateBlogPost, deleteBlogPost},
    [{id:'2', title:'Dummy title', content:'Dummy content'}],
    'blogState'
)
