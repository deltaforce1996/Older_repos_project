var conn = require("../config/db");

var logModal = logData => {
  (this.ChildID = logData.ChildID),
    (this.Date = logData.Date),
    (this.Time = logData.Time),
    (this.ScoreOne = logData.ScoreOne),
    (this.ScoreTwo = logData.ScoreTwo),
    (this.ScoreThree = logData.ScoreThree),
    (this.Type_One = logData.Type_One),
    (this.Type_Two = logData.Type_Two),
    (this.Type_Three = logData.Type_Three);
};

logModal.InsertLogusedApp = (newLog, result) => {
  conn.query("INSERT INTO loguseapp SET ?", newLog, (err, res) => {
    if (err) {
      console.log("Error : ", err);
      result(err, null);
    } else {
      console.log("Result : ", res.insertId);
      result(null, res.insertId);
    }
  });
};  

logModal.DeleteAccount=(ChildID,result)=>{
    conn.query("DELETE FROM loguseapp WHERE ChildID = ?",ChildID,(err,res)=>{
        if(err){
            console.log("Error : ", err);
            result(err, null);
        }else{
            console.log("Result : ", res);
            result(null, res);
        }
    })
}

logModal.ReciectHistory = (childID, result) => {
  conn.query(
    "SELECT " +
    "childs.Child_Information AS id, " +
    "DATE_FORMAT(loguseapp.Date,'%d-%m-%Y') AS title, " +
    "loguseapp.ScoreOne AS scoreOne, " +
    "loguseapp.ScoreTwo AS scoreTwo, " +
    "loguseapp.ScoreThree AS scoreThree, " +
    "(select Types.Type_Name from heroku_41eba3417d89b14.Types where Types.Type_ID = loguseapp.Type_One) AS TypeOne, " +
    "(select Types.Type_Name from heroku_41eba3417d89b14.Types where Types.Type_ID = loguseapp.Type_Two) AS TypeTwo, " +
    "(select Types.Type_Name from heroku_41eba3417d89b14.Types where Types.Type_ID = loguseapp.Type_Three) AS TypeThree, " +
    "loguseapp.Time AS Time " +
    "FROM loguseapp INNER JOIN childs ON childs.Child_ID = loguseapp.ChildID WHERE ChildID = ?",childID,
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

module.exports = logModal;
