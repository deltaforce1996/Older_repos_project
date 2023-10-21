module.exports = app =>{
    var todoList = require("../controller/manageController");

    app
    .route("/ManageScore")
    .post(todoList.InsertNewScore);

    app
    .route("/DeleteAccount")
    .post(todoList.DeleteAccount)

    app
      .route("/ManageScore/:Score_ID")
      .put(todoList.UpdateScoreAndType)

      app
      .route("/Result/:Child_ID")
      .get(todoList.GetMyType);

      app
      .route("/Histpry/:Child_ID")
      .get(todoList.GetHistory);
}