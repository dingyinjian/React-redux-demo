import React, { Component } from 'react';
import logo from './images/log.png'
import './login.less';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class Login extends Component {
    
    validatePwd=(rule, value)=>{
        const reg=/^[a-zA-Z0-9]{6,8}$/;
        if(reg.test(value)){
            return Promise.resolve();          
        }
        return Promise.reject('The two passwords that you entered do not match!');
    }
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };
        return (
            <div className='login'>
                <div className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>React项目:后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登陆</h1>
                    <Form name="normal_login" className="login-form" initialValues={{ username: '123456', }} onFinish={onFinish}>
                        <Form.Item  name="username" rules={[{ required: true, message: 'Please input your Username!'},{pattern:/^[a-zA-Z0-9]{4,12}$/,message:'用户名长度不能少于4位大于12位'} ]} >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password" rules={[ {required: true,message: 'Please input your Password!',},{validator:this.validatePwd}]}>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登 陆</Button>    
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}