/**
 * Created by pengcheng on 2016/12/30.
 */
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const React = require('react');
const ListView = require('../component/ListView');
const Slider = require('../component/Sider');
const routers = require('../router/router-config');
module.exports = React.createClass({
    getInitialState : function () {
        return {
            module : this.props.params.module,
            part : this.props.params.part,
            type : this.props.params.type
        }
    },
    changeState : function (module,part,type) {
        this.setState({
           module : module,
           part : part,
           type : type
        });
    },
    render : function () {
        var module = this.state.module,part = this.state.part,type = this.state.type ;
        var routeObj = routers();
        var Component = module && part && type ? routeObj[module][part][type] : module && part ? routeObj[module][part] : routeObj[404];
        return (
            <Layout style={ style.height }>
                <Sider>
                    <Slider changeState={ this.changeState } />
                </Sider>
                <Content>
                    <Component />
                </Content>
            </Layout>
        )
    }
});

const style = {
    height : {
        height : '100%'
    }
}