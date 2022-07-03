import { Col , Row , Form , Input, Textarea} from 'antd'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import styled from 'styled-components'
import { css } from 'styled-components'
import { contactUs } from '../redux/actions/contactActions'
import Spinner from '../components/Spinner'
import '../index.css'
import TextArea from 'antd/lib/input/TextArea'

//import components

const WrapperGrid = styled.div`
    ${props => props.full && css`
        grid-column: 1 / 3;
    `}
`;
function ContactForm() {
    const dispatch = useDispatch()
  const {loading} = useSelector(state=>state.alertsReducer)
    function onFinish(values) {
           dispatch(contactUs(values))
           console.log(values)
    }
    return (
        <div class=""className="contactus">
    {loading && (<Spinner />)}

    <Row justify='center mt-5'>
      <Col  lg={24} sm={24} xs={24} >
        <Form className='formcontact p-2' layout='vertical'  onFinish={onFinish}>
          <h3 className='contacthead'>Get In Touch</h3>
          <hr />
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true }]}
          >
            <TextArea/>
          </Form.Item>
          
          <button className="btn4 mt-2 mb-3">SEND MESSAGE</button>
          <br />

        </Form>
      </Col>
      </Row>
  </div>
);
}

export default ContactForm