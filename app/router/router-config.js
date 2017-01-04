/**
 * Created by pengcheng on 2017/1/3.
 */
module.exports = function () {
    return {
        dashboards : {
            analytics : require('../view/dashboards/analytics')
        },
        operation : {
            feedback : require('../view/operation/feedback/feedback'),
            notification : {
                lists : require('../view/operation/notification/lists'),
                edit : require('../view/operation/notification/edit')
            }
        },
        user : {},
        cms : {},
        configuration : {},
        analytics : {},
        404 : require('../view/404')
    }
}