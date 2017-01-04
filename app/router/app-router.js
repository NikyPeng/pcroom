/**
 * Created by pengcheng on 2016/12/30.
 */
import { Router,route,hashHistory } from 'react-router';
const React = require('react');
const Login = require('../view/login');
const Index = require('../view/index');
module.exports = React.createClass({
    render : function () {
        return (
            <Router history={ hashHistory }>
                <route path='/' component={ Index } />
                <route path="/:module/:part(/:type)" component={ Index } />
                <route path="/login" component={ Login } />
            </Router>
        )
    }
});