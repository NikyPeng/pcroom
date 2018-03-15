/**
 * Created by glzc on 2018/3/14.
 */
import React,{Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import homeStyle from './../../styles/home/home.style.css';
import base from './../../styles/base.style.css';
import PageOne from './childPages/pageOne';
import PageTwo from './childPages/pageTwo';
export default class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router>
                <div className={homeStyle.content, base.flex}>
                    <div className={homeStyle.nav}>
                        <NavLink className={base.link} activeClassName={base.active_link} to="/" exact>PageOne</NavLink>
                        <NavLink className={base.link} activeClassName={base.active_link} to="/home/pageTwo" >PageTwo</NavLink>
                    </div>
                    <div>
                        <Route path="/" component={PageOne} exact/>
                        <Route path="/home/pageTwo" component={PageTwo} />
                    </div>
                </div>
            </Router>
        )
    }
}