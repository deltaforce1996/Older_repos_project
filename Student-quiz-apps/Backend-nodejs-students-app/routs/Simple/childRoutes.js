module.exports = app => {
    var todoList = require("../../controller/Simple/childController");
  
    app
      .route("/Childs")
      .get(todoList.listOfChilds)
      .post(todoList.createChilds);
  
    app
      .route("/Childs/:childID")
      .get(todoList.readMyChilds)
      .put(todoList.updateMyChilds)
      .delete(todoList.deleteMyChilds);
  };