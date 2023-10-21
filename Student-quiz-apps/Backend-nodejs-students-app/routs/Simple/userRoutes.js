module.exports = app => {
  var todoList = require("../../controller/Simple/userController");

  app
    .route("/Accounts")
    .get(todoList.listOfUsers)
    .post(todoList.createAccount);

  app
    .route("/Account/:accountID")
    .get(todoList.readMyAccount)
    .put(todoList.updateMyAccount)
    .delete(todoList.deleteMyAccount);
};
