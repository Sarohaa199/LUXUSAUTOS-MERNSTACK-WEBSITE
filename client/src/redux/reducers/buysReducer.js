const initialData = {
    buys : [],

};

export const buysReducer = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'buy' : {
             return{
                 ...state,
                 cars : action.payload
             }
         }
         
         default:return state
     }

}
