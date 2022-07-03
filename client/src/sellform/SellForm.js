import React from 'react'
import {Row,Col, Form, Input, DatePicker, Radio,  } from 'antd';
import {useDispatch , useSelector} from 'react-redux'
import { sellCar } from "../redux/actions/sellActions";
import Spinner from '../components/Spinner';

function SellForm(){
  const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
      function onFinish(values) {
        dispatch(sellCar(values))
             console.log(values)
      }
  //date picker
    const onChange1=({date,dateString})=>{
      console.log(date, dateString);
    }
  
    //return statement
  return (
    
    <section className='sellbg' id='sellbg'>
    <div >
    {loading == true && (<Spinner/>)}
    <h1 style={{color:'white',fontWeight:'bold',fontSize:'2rem'}}> Tell Us More About Your Car.. </h1>
      <Row lg={2}  justify='center mt-5'>
    <Col lg={8}  className="form">
    <Form layout="vertical" enctype="multipart/form-data"  onFinish={onFinish}>
      <hr />
      <Form.Item  
  
        name="modelname"
        label="Model Name"
        rules={[{ required: true,message: 'Please input Car Model Name!' }]}
      >
        <Input 
        placeholder='Model Name'/>
        </Form.Item>
        <Form.Item 
        name="image"
        label="Image"
        
      >  
      <Input 
      placeholder='Image Url' />
        </Form.Item>
       <Form.Item 
        name="brand"
        label="Brand"
        rules={[{ required: true,message: 'Please input Car Brand!' }]}
      >
        <Input 
        placeholder='Car Brand'/>
        </Form.Item>

      <Form.Item
      name="dop"
      label="Date Of Purchase"
      rules={[{ required: true,message: 'Please input Car Date of Purchase !' }]}
      >
        
      <DatePicker style={{ padding: '10px', }} onChange={onChange1} />

      </Form.Item>
      <Form.Item
        name="capacity"
        label="Capacity"
        rules={[{ required: true,message: 'Please input Car Sitting Capacity!' }]}
      >
        <Input 
        placeholder='Seating Capacity'/>
        </Form.Item>
        <Form.Item
        name="fuelType"
        label="Fuel Type"
        rules={[{ required: true,message: 'Please input Car FuelType!' }]}
      >
        
         <Radio.Group defaultValue="a" size="large">
         <Radio.Button value="petrol">Petrol</Radio.Button>
         <Radio.Button value="desel">Desel</Radio.Button>
         <Radio.Button value="electric">Electric</Radio.Button>
       </Radio.Group>
       
        </Form.Item>
        <Form.Item
        name="distance"
        label="Kms. Driven"
        rules={[{ required: true,message: 'Please input Kms. Driven!' }]}
        >
        <Radio.Group defaultValue="1" size="large">
         <Radio.Button value="1">0-2.5K</Radio.Button>
         <Radio.Button value="2">2.5-5K</Radio.Button>
         <Radio.Button value="3">5-10K</Radio.Button>
         <Radio.Button value="4">10K+</Radio.Button>
       </Radio.Group>
        </Form.Item>
        <Form.Item
        name="price"
        label="Sale Price"
        rules={[{ required: true,message: 'Please input Expected Price!' }]}
      >
        <Input 
        placeholder='Price For Sale '/>
        </Form.Item>


      <button className="btn1">Sell Car</button>
      <br />
    </Form>
  </Col>
  </Row>
  </div>
  </section>
  
);
}

export default SellForm