import { useEffect, useReducer } from 'react';
import axios from 'axios';

   //const [loading, setLoading] = useState(false);  As it is linked to data we put in an object only
    // const [data, setData] = useState({ // replaced by reducer
    //     loading: true,
    //     data: {}
    // });

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

const useGet = url => { //generic function
    const [data, dispatch] = useReducer(reducer, {
        loading: true,
        data: {}
    })

    useEffect(() => {
        dispatch({ type: 'REQUEST' })
        axios
            .get(url)
            .then(res => {
                // setData({
                //     loading: false,
                //     data: res.data
                // })
                dispatch({ type: 'SUCCESS', data: res.data })
            })
    }, [url]);
    return data;
}

export default useGet;