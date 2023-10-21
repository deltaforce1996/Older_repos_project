var conn = require("../config/db");

var Childs = function(child) {
  this.Child_ID = child.Child_ID;
  this.Child_Information = child.Child_Information;
  this.Child_Age = child.Child_Age;
  this.Score_ID = child.Score_ID;
  this.Type_ID_No_Frist = child.Type_ID_No_Frist;
  this.Type_ID_No_Second = child.Type_ID_No_Second;
  this.Type_ID_No_Third = child.Type_ID_No_Third;
};

Childs.getAllChilds = result => {
  conn.query("SELECT * FROM childs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("childs : ", res);
      result(null, res);
    }
    z;
  });
};

Childs.addChilds = (newChilds, result) => {
  conn.query("INSERT INTO childs SET ?", newChilds, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Childs.getMyChilds = (childID, result) => {
  conn.query("SELECT * FROM childs WHERE Child_ID = ?", childID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Childs.updateChilds = (childID, data, result) => {
  if (data.length == 1) {
    conn.query(
      "UPDATE childs SET `Score_ID`=? WHERE Child_ID = ?",
      [data[0].Score_ID, childID],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  } else {
    conn.query(
      "UPDATE `childs` SET `Type_ID_No_Frist`=?,`Type_ID_No_Second`=?,`Type_ID_No_Third`=? WHERE Child_ID = ?",
      [
        data[0].Type_ID_No_Frist,
        data[1].Type_ID_No_Second,
        data[2].Type_ID_No_Third,
        childID
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
  }
};

Childs.removeMyChilds = (childID, result) => {
  conn.query(
    "DELETE FROM  childs  WHERE  Child_ID = ?",
    childID,
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

module.exports = Childs;
