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
    return state;
}

const init = baseURL => {
    const useGet = resource => { //generic function
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)

        const load = async() => {
            dispatch({ type: 'REQUEST' });
            const res = await axios.get(`${baseURL}${resource}.json`);

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
            const res = await axios.post(`${baseURL}${resource}.json`, data) //return a promise
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


export default init;