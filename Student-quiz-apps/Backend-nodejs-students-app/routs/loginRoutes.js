module.exports = app => {
    var todoList = require("../controller/loginController");
  
    app
      .route("/Login/:accountID")
      .get(todoList.LogIn);
  };