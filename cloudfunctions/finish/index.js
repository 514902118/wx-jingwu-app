const cloud = require('wx-server-sdk')
cloud.init()
// 经度 longitude;
// 纬度 latitude;
exports.main = async (event, context) => {
    var rp = require('request-promise');
    var options = {
        method: 'post',
        uri: 'http://39.105.58.173:18081/system/work/finish',
        body: { 
            phone:event.phone
        },
        json: true 
    };
    
    return rp(options).then(function (parsedBody) {
        return parsedBody
        })
        .catch(function (err) {
            return err
        });
}