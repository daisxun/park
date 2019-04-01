
const rootDocment  = 'https://citypark.wulian2025.net/city_park_apigateway';
let header = {
    'Accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': null,
  }
//   注册
let a ={
    'company_id':1002,
    'phone':'13256176767',
    'code':'123456',
    'wx_logo':'wx_logo',
    'wx_nickname':'wx_heizi',
    'wx_mini_open_id':'3434_efde_eedd_2345',
    "city_code":"3002"
}
  function getcontent(cg,data,cb){
    wx.request({
        url: rootDocment,
        data: { "header": { "token": cg.token },
                "data": {
                  "payload_type": "api",
                  "description": {
                    "type": "auth",
                    "consumer": cg.consumer,
                    "id": cg.id,
                    "params": {
                      "req": data
                    }
                  }
                }    
        },
        method: 'post',
        header: header,
        success: function (res) {
            return typeof cb == "function" && cb(res)
        }
      })
}


module.exports = {
    getapi: getcontent
  }  