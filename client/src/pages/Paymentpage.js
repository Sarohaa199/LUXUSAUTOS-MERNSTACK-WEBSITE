import { Col, Row, DatePicker,Divider, Modal ,Form , Input, Radio, Checkbox, InputNumber} from "antd";
import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getAllCars } from "../redux/actions/carsActions";
import { buyCar } from "../redux/actions/buyActions";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbar1 from "../components/Navbar1";
import TextArea from "antd/lib/input/TextArea";
  
function Paymentpage({match}) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch= useDispatch()
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id == match.params.carid));
    }
  }, [cars]);

  useEffect(() => {
    setTotalAmount( car.price);
  },[totalAmount]);


   
    const onSubmit = async (data) => {
      const { car,user ,firstname,lastname, email, phoneno, address,testdrivedate,totalAmount } = data;
      
      console.log('firstname: ', firstname);
      console.log('lastname: ', lastname);
      console.log('email: ', email);
      console.log('phoneno: ', phoneno);
      console.log('address: ', address);
      console.log('car: ', car);
      console.log('user: ', user);
      console.log('testdrivedate: ', testdrivedate);
      console.log('totalAmount: ', totalAmount);

       dispatch(buyCar(data))
    }
    
      return (
          <div>
          <Navbar1></Navbar1>
          <section className='sellbg' id='sellbg'>
    <div >
    {loading == true && (<Spinner/>)}
    <h1 style={{color:'white',fontWeight:'bold',fontSize:'2rem'}}> Please enter your Details.. </h1>
      <Row lg={2}  justify='center mt-5'>
    <Col lg={8}  className="form">
    <form id='Paymentpage'layout="vertical" enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)} >
      <hr /> 
  <p>Car Id</p>
      <input
                      type='text'
                      readOnly
                      name='car'
                      defaultValue={car._id}
                      className='form-control formInput'
                      {...register('car', {
                        required: { value: true, message: 'Please enter your name' }
                      })}
                    ></input> 
                    <br/>
    <p>User Id</p>
    <input
                      type='text'
                      readOnly
                      name='user'
                      defaultValue={JSON.parse(localStorage.getItem("user"))._id}
                      className='form-control formInput'
                      {...register('user', {
                        required: { value: true, message: 'Please enter your name' }
                      })}
                    ></input> 
      <p>TotalAmount</p>
      <input
                      type='text'
                      readOnly
                      name='totalAmount'
                      defaultValue={car.price}
                      className='form-control formInput'
                      {...register('totalAmount', {
                        required: { value: true, message: 'Please enter your name' }
                      })}
                    ></input> 
      <p>
        firstname
      </p>
      <input
                      type='text'
                      name='firstname'
                      className='form-control formInput'
                      placeholder="Enter Your FirstName"
                      {...register('firstname', {
                        required: { value: true, message: 'Please enter your name' }
                      })}
                    ></input>       
      <p>
        lastname
      </p>
      <input
                      type='text'
                      name='lastname'
                      className='form-control formInput'
                      placeholder="Enter Your LastName"
                      {...register('lastname', {
                        required: { value: true, message: 'Please enter your name' }
                      })}
                    ></input> 
            <p>
        Email
      </p>
      <input
                      type='text'
                      name='email'
                      className='form-control formInput'
                      placeholder="Enter Your Email"
                      {...register('email', {
                        required: { value: true, message: 'Please enter your name' }
                      })}
                    ></input> 
            <p>
        PhoneNo
      </p>
      <input
                      type='number'
                      name='phoneno'
                      className='form-control formInput'
                      placeholder="Enter Your Phone Number"
                      {...register('phoneno', {
                        required: { value: true, message: 'Please enter your name' }
                      })}
                    ></input> 
      <p>
      Address
      </p>
      <input
                      type='text'
                      name='address'
                      className='form-control formInput'
                      placeholder="Enter Your Address"
                      {...register('address', {
                        required: { value: true, message: 'Please enter your name' }
                      })}
                    ></input>    
      <p>Select Test Drive Date</p>
      <input
                      type='date'
                      name='testdrivedate'
                      className='form-control formInput'
                      placeholder="Enter Test Drive Date"
                      {...register('testdrivedate', {
                        required: { value: true, message: 'Please enter test drive date' }
                      })}
                    ></input>         
     
      <Checkbox onClick={console.log.values 
      }>Agree with Terms & Conditions </Checkbox>
      <button className="btn1">Make Booking</button>
    </form>
  </Col>
  </Row>


  </div>
  </section>
  </div>
      );
  }

  

export default Paymentpage