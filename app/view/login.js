/**
 * Created by pengcheng on 2016/12/30.
 */
import { Input,Row,Button,Col,Checkbox,Anchor } from 'antd';
const React = require('react');
const { Link } = Anchor;
const Style = {
    outStyle : {
        width : '100%',
        height : '100%',
        backgroundColor : '#666'
    },
    inStyle : {
        position : 'absolute',
        left : '50%',
        top : '50%',
        transform : 'translate(-50%,-50%)',
        width : '300px',
        padding : '30px 20px',
        height : '200px',
        backgroundColor : '#fff'
    }
}
module.exports = React.createClass({
    getInitialState : function () {
        var user = window.localStorage.getItem('user');
        user = user ? JSON.parse(user) : ''
        return {
            checked : user ? true : false,
            username : user ? user.username : '',
            password : user ? user.password : ''
        }
    },
    rememberMe : function (e) {
        this.setState({
            checked : !this.state.checked
        });
    },
    handleLogin : function () {
        var userData = {
            username : this.refs.username.refs.input.value,
            password : this.refs.password.refs.input.value
        };
        this.state.checked ? window.localStorage.setItem('user',JSON.stringify(userData)) : window.localStorage.removeItem('user');
        console.log('username : '+this.refs.username.refs.input.value+'\npassword : '+this.refs.password.refs.input.value);
    },
    render : function () {
        return (
            <div style = { Style.outStyle }>
                <div className='login' style = { Style.inStyle }>
                    <Row type="flex" justify="center">
                        <Input type='text' ref='username' defaultValue = { this.state.username } addonBefore='Username' />
                    </Row>
                    <Row type="flex" justify="center">
                        <Input type='password' ref='password' defaultValue = { this.state.password } addonBefore=' Password' />
                    </Row>
                    <Row type='flex' justify='space-between'>
                        <Col span={ 8 }>
                            <Checkbox checked={ this.state.checked } onChange={ this.rememberMe }>记住我</Checkbox>
                        </Col>
                        <Col span={ 10 } offset={ 6 }>
                            <Link href='#' title='忘记密码了?' />
                        </Col>
                    </Row>
                    <Row type='flex' justify='center'><Button type="primary" onClick={ this.handleLogin }>登陆</Button></Row>
                </div>
            </div>
        )
    }
});