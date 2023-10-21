module.exports = app => {
    var todoList = require("../controller/typeController");
    app
      .route("/Types")
      .post(todoList.readMyType);
  };