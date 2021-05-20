// nineso Server
const url = 'https://nineso.co.kr'

var req_set = '';

// rest url : rurl
module.exports.req_post = function (rurl, data) {
  req_set = {
    url : url + rurl,
    headers: {
      "Content-Type" : "application/json"
    },
    method: "POST",
    form : data
  }
  return req_set
}

module.exports.req_get = function (rurl) {
  req_set = {
    url : url + rurl,
    headers: {
      "Content-Type" : "application/json"
    },
    method: "GET"
  }
  return req_set
}
