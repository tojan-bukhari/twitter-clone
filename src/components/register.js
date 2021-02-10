import { Form, Input, Button, Checkbox } from 'antd';
import React , {useState }from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function Register (){
  const history = useHistory();
  const[username,setusername] = useState()
  const[email,setemail]       = useState()
  const[password,setpassword] = useState()

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const submit = async (e) =>{
    e.preventDefault();
    
    const newuser = { username , email , password}
    console.log('this is the new user', newuser)
    const res = axios.post('http://localhost:1200/api/register', newuser)
    console.log('this is the response', res.data)
    history.push('/login')
  
  
  }
  return (
      <div style={{
        position: 'absolute',
        width: '800px',
        height: '163px',
        left: '500px',
        top: '250px',
      }}>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={(e)=>{setusername(e.target.value)}} />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input onChange={(e)=>{setemail(e.target.value)}}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password onChange={(e)=>{setpassword(e.target.value)}}/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button onClick={submit} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form></div>
  );
};

