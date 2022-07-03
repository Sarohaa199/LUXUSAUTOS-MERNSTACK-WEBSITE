import axios from "axios";
import {message} from 'antd'


export const sellCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/sells/sellcar' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('New car added successfully')
         setTimeout(() => {
            window.location.href='/'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}