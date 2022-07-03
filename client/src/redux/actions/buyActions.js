import axios from "axios";
import { message } from "antd";

export const buyCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
     await axios.post("/api/buys/buycar" , reqObj);

    dispatch({ type: "LOADING", payload: false });
    
    message.success("Your car booked successfully we will contact you soon");
    setTimeout(() => {
      window.location.href='/'
    }, 500);

  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something went wrong , please try later");
  }
};