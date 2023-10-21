var conn = require("../config/db");

// var Users = (user) => {
//     User_ID = user.User_ID;
//     User_Information = user.User_Information;
//     Child_ID = user.Child_ID;
//     User_Profile = user.User_Profile;
// };

var Users = function(user) {
  this.User_ID = user.User_ID;
  this.User_Information = user.User_Information;
  this.Child_ID = user.Child_ID;
  this.User_Profile = user.User_Profile;
};

Users.getAllAccount = result => {
  conn.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Users : ", res);
      result(null, res);
    }
  });
};

Users.createNewAccount = (newAccount, result) => {
  conn.query(
    "INSERT INTO users SET ?",
    /*[newAccount.User_ID,newAccount.User_Information,newAccount.Child_ID,newAccount.User_Profile]*/ newAccount,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    }
  ); /* */
};

Users.getMyAccount = (accountID, result) => {
  const convert = (from, to) => str => Buffer.from(str, from).toString(to);
  const utf8ToHex = convert("utf8", "hex");
  const hexToUtf8 = convert("hex", "utf8");

  conn.query(
    "SELECT users.User_ID AS User_ID , users.User_Information,users.Child_ID,users.User_Profile,childs.Child_Information,childs.Score_ID," +
      "childs.Type_ID_No_Frist,childs.Type_ID_No_Second,childs.Type_ID_No_Third,childs.Child_Age,scores.Score_Group_First,scores.Score_Group_Second,scores.Score_Group_Third " +
      "FROM users INNER JOIN childs ON users.Child_ID = childs.Child_ID LEFT JOIN scores ON scores.Score_ID = childs.Score_ID " +
      "WHERE (SELECT UNHEX(users.User_ID)) = ?",
    accountID,
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

Users.updateAccount = (accountID, data, result) => {
  conn.query(
    "UPDATE `users` SET ? WHERE (SELECT UNHEX(users.User_ID)) =?",
    [data, accountID],
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

Users.removeAccount = (accountID, result) => {
  conn.query(
    "DELETE FROM `users` WHERE (SELECT UNHEX(users.User_ID))=?",
    accountID,
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

module.exports = Users;
