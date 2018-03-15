/**
 * Created by glzc on 2018/3/15.
 */
import React,{Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import base from './../../styles/base.style.css';
import news from './../../styles/news/news.style.css';
import PageOne from './childPages/pageOne';
import PageTwo from './childPages/pageTwo';

export default class News extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router basename="/news">
                <div className={ news.content, base.flex}>
                    <div className={news.nav}>
                        <NavLink className={base.link} activeClassName={base.active_link} to="/" exact>PageOne</NavLink>
                        <NavLink className={base.link} activeClassName={base.active_link} to="/pageTwo" >PageTwo</NavLink>
                    </div>
                    <div>
                        <Route path="/" component={PageOne} exact />
                        <Route path="/pageTwo" component={PageTwo} />
                    </div>
                </div>
            </Router>
        )
    }
}