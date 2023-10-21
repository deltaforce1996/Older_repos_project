var conn = require("../config/db");

// var Scores = score => {
//     this.Score_ID = score.Score_ID;
//     this.Score_Group_First = score.Score_Group_First;
//     this.Score_Group_Second = score.Score_Group_Second;
//     this.Score_Group_Third = score.Score_Group_Third;
// };

var Scores = function(score) {
  this.Score_ID = score.Score_ID;
  this.Score_Group_First = score.Score_Group_First;
  this.Score_Group_Second = score.Score_Group_Second;
  this.Score_Group_Third = score.Score_Group_Third;
};

Scores.getAllScore = result => {
  conn.query("SELECT * FROM scores", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("scores : ", res);
      result(null, res);
    }
  });
};

Scores.addScore = (newScore, result) => {
  conn.query(
    "INSERT INTO scores SET ?",
    /*[newAccount.User_ID,newAccount.User_Information,newAccount.Child_ID,newAccount.User_Profile]*/ newScore,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    }
  );
};

Scores.getMyScore = (scoreID, result) => {
  conn.query("SELECT * FROM scores WHERE Score_ID = ?", scoreID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Scores.getMyTypeByChildID = (ChildID, result) => {
  conn.query(
    "SELECT Type_ID_No_Frist,Type_ID_No_Second,Type_ID_No_Third FROM `childs` WHERE `Child_ID` = ?",
    ChildID,
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

Scores.updateScore = (scoreID, data, result) => {
  conn.query(
    "UPDATE `scores` SET `Score_Group_First`=?,`Score_Group_Second`=?,`Score_Group_Third`=? WHERE `Score_ID`=?",
    [
      data[0].Score_Group_First,
      data[0].Score_Group_Second,
      data[0].Score_Group_Third,
      scoreID
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Scores.removeMyScore = (scoreID, result) => {
  conn.query(
    "DELETE FROM  scores  WHERE  Score_ID = ?",
    scoreID,
    result,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Scores;
