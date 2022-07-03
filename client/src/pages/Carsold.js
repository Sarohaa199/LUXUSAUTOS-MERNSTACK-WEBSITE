import { Col, Row, Divider, DatePicker, Modal ,Form , Input} from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getAllCars } from "../redux/actions/carsActions";
import moment from "moment";
import { buyCar } from "../redux/actions/buyActions";
import axios from "axios";
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbar1 from "../components/Navbar1";
//razorpay//



function CarSold({match}) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);




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


  return (
	<div>
    <Navbar1 />
    
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
          <h3 style={{color:'Black',fontWeight:'bold',fontSize: '2rem'}} >Car Details</h3>
          </Divider>
          <div style={{ textAlign: "right" }}>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent Per hour /-</p>
            <p>Fuel Type : {car.fuelType}</p>
            <p>Max Persons : {car.capacity}</p>
          </div>

          <br />
          <button
            className="btn1 mt-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            See Booked Slots
          </button>
          
            <div>
              <p>
                Price: <b>{car.price}</b>
              </p>
             

              <h3>Total Amount : {totalAmount}</h3>
              
            </div>
            <button className="btn1 mr-2"><Link to={`/payment/${car._id}`}>Buy Now</Link></button>
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
    </div>
  );
}

  
export default CarSold 