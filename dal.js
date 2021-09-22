const API_ENDPOINT ='http://128.199.200.199/wpsapi/';
const axios = require('axios');
const timeout=3000
module.exports.login2App = function(email, password, callback) {
    let url = API_ENDPOINT + "shop/login2App";
    let _data={
        email:email,
        password:password,
        platform:'pos_terminal'
    }
    axios({
        method: 'post',
        url: url,
        data:_data,
        timeout: timeout,
    }).then((response) =>{
        callback(null, response.data)
    }
    ).catch(function (error) {
        callback(error, null);
    });
}

