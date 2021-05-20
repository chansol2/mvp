const express = require("express");
const req_modules = require("../req_modules");
const request = require("request");
const cs = require("../cs.js");
const user_func = require("./users_function");
const router = express.Router();

let req_data, res_data;

// /users/login
router.get("/login", function (req, res, next) {
  res.render("login");
});

// /users/logout
// 수정 필요 false 안먹음. 비동기 issue
router.get("/logout", function (req, res, next) {
  req.session.logined = false;
  // cs.cs_check(req);
  res.redirect("/");
});

// 수정필요.. JSON format이 아니라 unregistered email만 나옴...
// /users/login-local
router.post("/login-local", async function (req, res, next) {
  if (req.body.email.length != 0 && req.body.password.length != 0) {
    req_data = {
      email: req.body.email,
      password: req.body.password,
    };

    res_data = await user_func.login_local(req_data);
    res_data = JSON.parse(res_data);

    try {
      if (res_data.status == 200) {
        req.session.logined = true;
        console.log(req.session.logined);
        res.redirect("/");
      } else {
        res.redirect("/");
      }
    } catch (err) {
      console.error(err);
      res.redirect("/");
    }
  }
});

// /users/register
router.get("/register", function (req, res, next) {
  res.render("register");
});

// /users/register-local
router.post("/register-local", async function (req, res, next) {
  req_data = {
    email: req.body.email,
    password: req.body.password,
    nickname: req.body.nickname,
    dob: req.body.dob,
    gender: req.body.gender,
  };

  res_data = await user_func.reg_local(req_data);
  res_data = JSON.parse(res_data);
  console.log(res_data);

  try {
    if (res_data.status == 200) {
      req.session.logined = true;
      console.log(req.session.logined);
      res.redirect("https://www.naver.com");
    } else {
      res.redirect("/users/login");
    }
  } catch (err) {
    console.error(err);
    res.redirect("/users/login");
  }
});

module.exports = router;
