import { useReducer, useEffect } from 'react';
import axios from 'axios';

const INITIAL_STATE = {
    loading: false,
    data: {}
}

const reducer = (state, action) => {
    if(action.type === 'REQUEST'){
        return {
            ...state,
            loading: true
        }
    }
    if(action.type === 'SUCCESS'){
        return {
            ...state,
            loading: false,
            data: action.data
        }
    }
    if(action.type === 'FAILURE'){
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
    return state;
}

const getAuth = () => {
    const token = localStorage.getItem('token');
    if(token){
        return '?auth='+token;
    }
    return '';
}

const init = baseURL => {
    const useGet = resource => { //generic function
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)

        const load = async() => {
            dispatch({ type: 'REQUEST' });
            const res = await axios.get(`${baseURL}${resource}.json` + getAuth());

            dispatch({ type: 'SUCCESS', data: res.data })
        }
    
        useEffect(() => {
          load();
        }, [resource]);

        return {
            ...data,
            refetch: load
        }
    } 

    const usePost = (resource) => {
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
    
        const post = async(data) => {
            dispatch({type: 'REQUEST'})
            const res = await axios.post(`${baseURL}${resource}.json` + getAuth(), data) //return a promise
            dispatch({
                type: 'SUCCESS',
                data: res.data
            })
        }
        return [data, post];
    }

    return {
        useGet,
        usePost
    }  
}

//usePost for login, baseUrl is different
export const usePost = resource => {
    const [data, dispatch] = useReducer(reducer, INITIAL_STATE);

    const post = async(data) => {
        dispatch({type: 'REQUEST'});
        try{
            const res = await axios.post(resource, data) //return a promise
            if(res.data.error && Object.keys.length > 0){
                dispatch({
                    type: 'FAILURE',
                    data: res.data.error.message
                });
            }else{
                dispatch({
                    type: 'SUCCESS',
                    data: res.data
                });   
                return res.data; 
            }
        }catch(err){
            dispatch({
                type: 'FAILURE',
                error: 'unknown error'
            })
        }
    }
    return [data, post];
}


export default init;