/**
 * Created by pengcheng on 2017/1/3.
 */
const React = require('react');
module.exports = React.createClass({
    render : function () {
        return (
            <div style={ style.style }>
                <h3>页面不存在</h3>
            </div>
        )
    }
});
const style = {
    style : {
        textAlign : 'center',
        paddingTop : '100px'
    }
}