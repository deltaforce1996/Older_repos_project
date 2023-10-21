module.exports = app => {
    var todoList = require("../controller/registerControl");
  
    app
      .route("/Register")
      .post(todoList.Register);
  };