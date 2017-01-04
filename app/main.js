/**
 * Created by pengcheng on 2016/11/17.
 */
//var greeter = require('./Greeter.js');
const React = require('react');
const style = require('./css/style.css');
const ReactDom = require('react-dom');
//const Index = require('./view/index');
//const Login = require('./view/login');
//document.querySelector('#root').appendChild(greeter());
const App = require('./router/app-router');
const view = document.querySelector('#root');
ReactDom.render(<App />,view);