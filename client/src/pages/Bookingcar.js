import { Col,Form, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import 'reactjs-popup/dist/index.css';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getAllCars } from "../redux/actions/carsActions";
import {Link} from 'react-router-dom'
import moment from "moment";
import { bookCar } from "../redux/actions/bookingActions";
import AOS from 'aos';
import axios from "axios";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbar1 from "../components/Navbar1";
import {NavLink} from "react-router-dom";


const { RangePicker } = DatePicker;
function BookingCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setdriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  //payment
const initPayment = async (data) => {
  
  const options = {
    key_id: 'rzp_test_O9AcwiBuJzZpeo',
    amount: car.price,
    currency: data.currency,
    name: car.name,
    email:data.email,
    description: "Test Transaction",
    order_id: data.id,
    handler: async (response) => {
      try {
        const verifyUrl = "http://localhost:5000/api/bookings/verify";
        const { data } = await axios.post(verifyUrl, response);
      } catch (error) {
        console.log(error);
      }
    },
    theme: {
      color: "#3399cc",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

const handlePayment = async () => {
  try {
    const orderUrl = "http://localhost:5000/api/bookings/orders";
    const { data } = await axios.post(orderUrl, { amount: car.price});
    console.log(data);
    initPayment(data.data);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id == match.params.carid));
    }
  }, [cars]);

  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour);
    if (driver) {
      setTotalAmount(totalAmount + 30 * totalHours);
    }
  }, [driver, totalHours]);
 
  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));
    setTotalHours(values[1].diff(values[0], "hours"));
  }
  
  const onSubmit = async (data) => {
    const { car,user, totalHours ,totalAmount,driverRequired } = data;
    
    console.log('car: ', car);
    console.log('user: ', user);
    console.log('totalHours',totalHours);
    console.log('totalAmount: ', totalAmount);
    console.log('driverRequired: ', driverRequired);

     dispatch(bookCar(data))
  }



  
  return (
    <><Navbar1></Navbar1>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24} className='p-3'>
          <img src={car.image} className="carimg2 bs1 w-100" />
        </Col>

        <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>
            Car Info
          </Divider>
          <div style={{ textAlign: "right" }}>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent Per hour /-</p>
            <p>Fuel Type : {car.fuelType}</p>
            <p>Max Persons : {car.capacity}</p>
          </div>
          <form id='Paymentpage' layout="vertical" enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)} >
          
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
                    <Divider type="horizontal" dashed>
            Select Time Slots
          </Divider>
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD yyyy HH:mm"
            onChange={selectTimeSlots}
          />
          <br />
          <button
            className="btn1 mt-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            See Booked Slots
          </button>
          {from && to && (
            <div>
              <p>Total Hours</p>
                <input
                      type='number'
                      readOnly
                      name='totalHours'
                      Value={totalHours}
                      className='form-control formInput'
                      {...register('totalHours', {
                        required: { value: true }
                      })}
                    ></input>
              <input
                      type='text'
                      hidden
                      name='transactionId'
                      
                      className='form-control formInput'
                      {...register('transactionId', {
                        required: { value: true }
                      })}
                    ></input>
                    <br></br>
              <p>Total Amount</p>
              <input
                      type='number'
                      readOnly
                      name='totalAmount'
                      value={(car.price)*(totalHours)}
                      
                      className='form-control formInput'
                      {...register('totalAmount', {
                        required: { value: true }
                      })}
                    ></input> 
                    <br/>
                
      <button className="btn1" onClick={handlePayment} >Pay Now</button>
      </div>
      
            
          )}
       
          </form>
          
        </Col>

        {car.name && (
          <Modal
            visible={showModal}
            closable={false}
            footer={false}
            title="Booked time slots"
          >
            <div className="p-2">
              {car.bookedTimeSlots.map((slot) => {
                return (
                  <button className="btn1 mt-2">
                    {slot.from} - {slot.to}
                  </button>
                );
              })}

              <div className="text-right mt-5">
                <button
                  className="btn1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )}
      </Row>
    </>
  );
}

export default BookingCar;
