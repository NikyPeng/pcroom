/**
 * Created by pengcheng on 2017/1/3.
 */
import { Row,Col } from 'antd';
const React = require('react');
module.exports = React.createClass({
    render : function () {
        return (
            <div style={ style.out }>
                <Row type='flex' justify='start' align='middle'>
                    <Col>
                        <img style={ style.img } src='./img/logo.png' />
                    </Col>
                    <Col>
                        <h2>信用生活</h2>
                    </Col>
                </Row>
            </div>
        )
    }
});
const style = {
    out : {
        backgroundColor : '#666666',
        color : '#ffffff',
        paddingLeft : '20px'
    },
    img : {
        display : 'block',
        width : '40px',
        height : '64px'
    }
}