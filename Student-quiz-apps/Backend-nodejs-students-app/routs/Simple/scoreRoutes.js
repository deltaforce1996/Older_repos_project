module.exports = app => {
    var todoList = require("../../controller/Simple/scoreController");
  
    app
      .route("/Scores")
      .get(todoList.listOfScore)
      .post(todoList.createScore);
  
    app
      .route("/Scores/:scoreID")
      .get(todoList.readScoreMyAccount)
      .put(todoList.updateScoreMyAccount)
      .delete(todoList.deleteScoreMyAccount);
  };