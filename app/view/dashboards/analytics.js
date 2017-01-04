/**
 * Created by pengcheng on 2017/1/3.
 */
const React = require('react');
module.exports = React.createClass({
    render : function () {
        return (
            <div style={ style.style }>
                <h2>欢迎进入CMS编辑后台</h2>
            </div>
        )
    }
});
const style = {
    style : {
        textAlign : 'center',
        paddingTop : '100px',
        color : '#666'
    }
}