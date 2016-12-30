/**
 * Created by pengcheng on 2016/12/30.
 */
const React = require('react');
const ListView = require('../component/ListView');
module.exports = React.createClass({
    getInitialState : function () {
        return {
            data : ['乔丹','奥尼尔','邓肯','科比','韦德','詹姆斯'],
            num : 0
        }
    },
    changeState : function () {
        this.setState({
           data : ['安东尼','维斯布鲁克','库里','克莱·汤普森'],
           num : 1
        });
    },
    render : function () {
        return (
            <div>
                <ListView lists={ this.state.data } num={ this.state.num } />
                <button onClick={ this.changeState}>Click Me</button>
            </div>
        )
    }
});