var conn = require("../config/db");

var Types = function(score) {
  this.Type_ID = score.Type_ID;
  this.Type_Name = score.Type_Name;
  this.Type_URL = score.Type_URL;
};

Types.getMyType = (arr, result) => {
  conn.query(
    "SELECT * FROM types WHERE Type_ID IN(?,?,?)",
    [arr[0], arr[1], arr[2]],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Types;
