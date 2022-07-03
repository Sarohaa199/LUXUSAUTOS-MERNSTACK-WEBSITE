import axios from "axios";
import {message} from 'antd'


export const contactUs=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/contacts/contactus' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('Thanks for Contacting Us')
         setTimeout(() => {
            window.location.href='/'
         }, 500);    
        } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}