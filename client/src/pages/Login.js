import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message, Spin } from 'antd';
import '../resources/authentication.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            // Use environment variable for backend API URL
            const user = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, values);
            console.log(user.data);
            message.success('Login successful!');
            localStorage.setItem('sheyresume-user', JSON.stringify(user.data));
            setLoading(false);
            navigate('/home');
        } catch (error) {
            setLoading(false);
            message.error('Login failed!');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('sheyresume-user')) {
            navigate('/home');
        }
    }, [navigate]);

    return (
        <div className='auth-parent'>
            {loading && <Spin size="large" />}
            <Form layout='vertical' onFinish={onFinish}>
                <h1 className='brand'>Mayank's Resume Building Website</h1>
                <h1>Login</h1>
                <hr />
                <Form.Item name='username' label='Username' rules={[{ required: true, message: 'Please enter your username!' }]}>
                    <Input placeholder="Enter your username" />
                </Form.Item>

                <Form.Item name='password' label='Password' rules={[{ required: true, message: 'Please enter your password!' }]}>
                    <Input.Password placeholder="Enter your password" />
                </Form.Item>

                <div className='d-flex align-items-center justify-content-between'>
                    <Link to='/register' className='underline'>Click here to register</Link>
                    <Button type="primary" htmlType='submit'>Log In</Button>
                </div>
            </Form>
        </div>
    );
}

export default Register;
