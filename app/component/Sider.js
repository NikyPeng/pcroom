/**
 * Created by pengcheng on 2017/1/2.
 */
import { Menu,Icon } from 'antd';
import { Link } from 'react-router';
const Logo = require('./Logo');
const React = require('react');
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
module.exports = React.createClass({
    getInitialState : function () {
        return {
            current : '1',
            openKeys : []
        }
    },
    handleClick : function (e) {
        console.log(e.key);
        var route = window.location.hash;
        if(route.indexOf('?') > -1){
            route = route.slice(0,route.indexOf('?'))
        }
        route = route.split('/');
        this.setState({ current : e.key });
        this.props.changeState(route[1],route[2],route[3]);
    },
    onOpenChange : function (openKeys) {
        const state = this.state;
        const latestOpenKey = openKeys.find((key)=> !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find((key) => !(openKeys.indexOf(key) > -1));
        console.log(openKeys);
        console.log(state.openKeys);
        let nextOpenKeys = [];
        if(latestOpenKey){
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if(latestCloseKey){
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys : nextOpenKeys });
    },
    getAncestorKeys : function (key) {
        const map = {
            feedback : ['operation'],
            notification : ['operation'],
            newscenter : ['operation']
        };
        return map[key] || []
    },
    render : function () {
        return (
            <div>
                <Logo />
                <Menu mode='inline' openKeys={ this.state.openKeys } selectedKeys = { [this.state.current] } style={ style.menu } onOpenChange={ this.onOpenChange } onClick={ this.handleClick }>
                    <SubMenu key='dashboards' title={ <span><Icon type="home" /><span>仪表盘</span></span> }>
                        <Item style={ style.menu }>
                            <Link style={ style.link } to='/dashboards/analytics'>统计分析</Link>
                        </Item>
                    </SubMenu>
                    <SubMenu key='operation' title={ <span><Icon type='appstore' /><span>运营</span></span> }>
                        <SubMenu key='feedback' title='反馈'>
                            <Item style={ style.menu }>
                                <Link style={ style.link } to='/operation/feedback?platform=android'>Android</Link>
                            </Item>
                            <Item style={ style.menu }>
                                <Link style={ style.link } to='/operation/feedback?platform=ios'>IOS</Link>
                            </Item>
                            <Item style={ style.menu }>
                                <Link style={ style.link } to='/operation/feedback?platform=pc'>PC</Link>
                            </Item>
                        </SubMenu>
                        <SubMenu key='notification' title='消息推送'>
                            <Item style={ style.menu }>
                                <Link style={ style.link } to='/operation/notification'>消息推送列表</Link>
                            </Item>
                            <Item style={ style.menu }>
                                <Link style={ style.link } to='/operation/notification'>推送消息编辑</Link>
                            </Item>
                        </SubMenu>
                        <SubMenu key='newscenter' title='消息中心'>
                            <Item style={ style.menu }>
                                <Link style={ style.link } to='/operation/newscenter/lists'>系统消息列表</Link>
                            </Item>
                            <Item style={ style.menu }>
                                <Link style={ style.link } to='/operation/newscenter/activies'>系统消息-活动</Link>
                            </Item>
                            <Item style={ style.menu }>
                                <Link style={ style.link } to='/operation/newscenter/notice'>系统消息-公告</Link>
                            </Item>
                        </SubMenu>
                        <Item style={ style.menu }>
                            <Link style={ style.link } to='/operation/startup'>启动页</Link>
                        </Item>
                        <Item style={ style.menu }>
                            <Link style={ style.link } to='/operation/floatpage'>引导浮层</Link>
                        </Item>
                        <Item style={ style.menu }>
                            <Link style={ style.link } to='/operation/version'>APP版本</Link>
                        </Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
});
const style = {
    menu : {
        width : '240px',
        backgroundColor : '#666666',
        color : '#ffffff'
    },
    link : {
        color : '#ffffff'
    }
}