/**
 * Created by pengcheng on 2016/12/30.
 */
const React = require('react');

module.exports = React.createClass({
    propTypes : {  //定义属性值类型
        lists : React.PropTypes.array
    },
    getDefaultProps : function () { //初始化默认属性值
        return {
            lists : []
        }
    },
    getInitialState : function () { //初始化状态
        return {
            lists : this.props.lists,
            time : this.props.num - new Date().getFullYear()
        }
    },
    componentWillMount : function () {

    },
    componentDidMount : function () {
        var lists = this.state.lists;
        var listsView = this.refs.lists;
        console.log(listsView);
        lists.map(function (v) {
            var divEle = document.createElement('div');
            divEle.innerHTML = v;
            listsView.appendChild(divEle)
        });
    },
    componentWillReceiveProps : function () {

    },
    shouldComponentUpdate : function () {
        return true;
    },
    componentWillUpdate : function () {

    },
    componentDidUpdate : function () {

    },
    componentWillUnmount : function () {
        console.log('销毁');
    },
    render : function () {
        var day = this.props.num - new Date().getFullYear();
        return (
            <div>
                <h1>{ day }</h1>
                <h3> { this.state.time } </h3>
                <ul ref='lists'>

                </ul>
            </div>

        )
    }
});