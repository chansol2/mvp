const request = require("request");
const req_modules = require("../req_modules");

exports.reg_local = (data) => {
  return new Promise((resolve, reject) => {
    request(
      req_modules.req_post("/api/auth/register/local", data),
      (err, res, r) => {
        try {
          resolve(r);
        } catch (err) {
          reject(err);
        }
      }
    );
  });
};

exports.login_local = (data) => {
  return new Promise((resolve, reject) => {
    request(
      req_modules.req_post("/api/auth/login/local", data),
      (err, res, r) => {
        try {
          resolve(r);
        } catch (err) {
          reject(err);
        }
      }
    );
  });
};
