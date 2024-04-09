import React, { useState,useRef,useMemo,useEffect  } from 'react';
import logo1 from "../../nba-images/logo1.png";
import { useNavigate } from 'react-router-dom';


import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton, Drawer, Form, Input, Slider, Button,notification, Divider, Space } from 'antd';

import "./header.css";


export default function Header(props) {
  const negivate = useNavigate();
  const { setFeedback } = props;
  const [api, contextHolder] = notification.useNotification();
  const nameRef = useRef(null);
  const [name, setName] = useState('');
  const getName = () => {
    setName(nameRef.current.value);
  };
  const openNotification = (n) => {

    api.open({
      message: `${n}, thank You for Your Feedback!`,
      description:
        'Your input is greatly appreciated, and we are committed to enhancing our website soon.',
      duration: 0,
    });
  };

  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log('Received values:', values);
    setOpen(false);
    form.resetFields();
    openNotification(values.name);
    setFeedback(values);
  };
  const upper = () => {
    negivate('/feedback');
  };
  const showGame = () => {
    negivate('/');
  };


  return (
    <div id="header">
      <img id="header-logo" onClick={showGame} src={logo1} alt="logo" />
      {/* <FloatButton
        
        icon={<CustomerServiceOutlined />}
        type="primary"
        style={{
          right: 24,
          zIndex: 1000,
        }}
      /> */}
  <>
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{
        right: 24,
      }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton onClick={upper}/>
      <FloatButton onClick={showDrawer} icon={<CommentOutlined />} />
    </FloatButton.Group>
  </>

      <Drawer title="Feedback" id="drawer" onClose={onClose} open={open}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input  ref={nameRef} size='large' placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { type: 'email', message: 'Please enter a valid email address' },
              { required: true, message: 'Please enter your email' }
            ]}
          >
            <Input size='large' placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="satisfaction"
            label="Satisfaction"
            rules={[{ required: true, message: 'Please rate your satisfaction' }]}
          >
            <Slider />
          </Form.Item>
          <Form.Item
            name="feedback"
            label="Any question about our website?"
            rules={[{ required: false, message: 'Please provide your feedback' }]}
          >
            <Input.TextArea  id="textarea" rows={6} placeholder="Is there any thing we can improve?" />
          </Form.Item>
          <Form.Item>
          {contextHolder}
            <Button onClick={getName} size='large' type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
