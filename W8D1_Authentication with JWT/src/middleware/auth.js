const jwt= require("jsonwebtoken");


// - Once, all the apis are working fine, move the authentication related code in a middleware called auth.js
// - Add this middleware at route level in the routes where applicable.

const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "functionup-assignment-jsonwebtoken-done");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });

    next()
}

module.exports= {authenticate}


