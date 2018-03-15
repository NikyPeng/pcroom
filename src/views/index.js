/**
 * Created by glzc on 2018/3/14.
 */
import React,{Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import base from './../styles/base.style.css';
import Home from './home/home';
import News from './news/news';
export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router basename='/' forceRefresh={this.props.isRefresh}>
                <div>
                    <div className={base.content}>
                        <div className={base.nav}>
                            <NavLink className={base.link} activeClassName={base.active_link} to="/" exact>首页</NavLink>
                            <NavLink className={base.link} activeClassName={base.active_link} to="/news">公司新闻</NavLink>
                            <NavLink className={base.link} activeClassName={base.active_link} to="/join">人事招聘</NavLink>
                            <NavLink className={base.link} activeClassName={base.active_link} to="/about">关于我们</NavLink>
                            <NavLink className={base.link} activeClassName={base.active_link} to="/contact">联系我们</NavLink>
                        </div>
                        <Route path='/' component={Home} exact/>
                        <Route path='/news' component={News} />
                        <Route path='/join' render={() => <h1>This is Join!!</h1>} />
                        <Route path='/about' render={() => <h1>This is About!!</h1>} />
                        <Route path='/contact' render={() => <h1>This is Contact!!</h1>} />
                    </div>
                </div>
            </Router>
        )
    }
}