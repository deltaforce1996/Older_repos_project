var Scores = require("../modal/Score");
var Childs = require("../modal/child");
var Log = require("../modal/LogModal");
var dateFormat = require("dateformat");
const crypto = require("crypto");
var User = require("../modal/User");

var asiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" });

exports.InsertNewScore = (req, res) => {
  let newScore = [];

  if (
    req.body.Score_Group_First == "" ||
    req.body.Score_Group_Second == "" ||
    req.body.Score_Group_Third == ""
  ) {
    res.status(400).json({ error: true, message: "โปรดใส่ข้อมูลครบถ้วน" });
  } else {
    var id = crypto.randomBytes(3).toString("hex");
    var Score_ID = "S" + id + "" + new Date().getMilliseconds();

    newScore.push({
      Score_ID: Score_ID,
      Score_Group_First: req.body.Score_Group_First,
      Score_Group_Second: req.body.Score_Group_Second,
      Score_Group_Third: req.body.Score_Group_Third
    });

    let dataSet = [];
    dataSet.push({
      Score_ID: Score_ID
    });

    let type = [];

    if (req.body.Score_Group_First >= 16) {
      type.push({ Type_ID_No_Frist: "T01" });
    } else {
      type.push({ Type_ID_No_Frist: null });
    }
    if (req.body.Score_Group_Second >= 14) {
      type.push({ Type_ID_No_Second: "T02" });
    } else {
      type.push({ Type_ID_No_Second: null });
    }
    if (req.body.Score_Group_Third >= 12) {
      type.push({ Type_ID_No_Third: "T03" });
    } else {
      type.push({ Type_ID_No_Third: null });
    }
    // let formattedString = '\`Score_ID\` = ' + dataSet[0].Score_ID;
    // res.status(200).json({ error: false, message: "บันทึกผลคะแนนสำเร็จ", newScore, formattedString, params: req.body.Child_ID}); //Debug

    var newLog = JSON.parse(
      JSON.stringify({
        ChildID: req.body.Child_ID,
        Date: dateFormat(new Date(asiaTime), "yyyy-mm-dd"),
        Time: dateFormat(new Date(asiaTime), "HH:MM:ss"),
        ScoreOne: req.body.Score_Group_First,
        ScoreTwo: req.body.Score_Group_Second,
        ScoreThree: req.body.Score_Group_Third,
        Type_One: type[0].Type_ID_No_Frist,
        Type_Two: type[1].Type_ID_No_Second,
        Type_Three: type[2].Type_ID_No_Third
      })
    );

    console.log(newLog);

    Scores.addScore(newScore, (err, result) => {
      if (err) res.status(400).json({ error: true, message: err });
      Childs.updateChilds(req.body.Child_ID, dataSet, (err, result) => {
        if (err) {
          res.status(400).json({ error: true, message: err });
        } else {
          Childs.updateChilds(req.body.Child_ID, type, (err, result) => {
            if (err) {
              res.status(400).json({ error: true, message: err });
            } else {
              Log.InsertLogusedApp(newLog, (err, result) => {
                if (err) {
                  res.status(400).json({ error: true, message: err });
                } else {
                  res.status(200).json({
                    error: false,
                    message: "บันทึกและประมวลผลผลคะแนนสำเร็จ",
                    Score_ID: Score_ID
                  });
                }
              });
            }
          });
        }
      });
    });
  }
};

exports.UpdateScoreAndType = (req, res) => {
  let newScore = [];

  newScore.push({
    Score_ID: req.params.Score_ID,
    Score_Group_First: req.body.Score_Group_First,
    Score_Group_Second: req.body.Score_Group_Second,
    Score_Group_Third: req.body.Score_Group_Third
  });

  let type = [];
  if (req.body.Score_Group_First >= 16) {
    type.push({ Type_ID_No_Frist: "T01" });
  } else {
    type.push({ Type_ID_No_Frist: null });
  }
  if (req.body.Score_Group_Second >= 14) {
    type.push({ Type_ID_No_Second: "T02" });
  } else {
    type.push({ Type_ID_No_Second: null });
  }
  if (req.body.Score_Group_Third >= 12) {
    type.push({ Type_ID_No_Third: "T03" });
  } else {
    type.push({ Type_ID_No_Third: null });
  }

  var newLog = JSON.parse(
    JSON.stringify({
      ChildID: req.body.Child_ID,
      Date: dateFormat(new Date(asiaTime), "yyyy-mm-dd"),
      Time: dateFormat(new Date(asiaTime), "HH:MM:ss"),
      ScoreOne: req.body.Score_Group_First,
      ScoreTwo: req.body.Score_Group_Second,
      ScoreThree: req.body.Score_Group_Third,
      Type_One: type[0].Type_ID_No_Frist,
      Type_Two: type[1].Type_ID_No_Second,
      Type_Three: type[2].Type_ID_No_Third
    })
  );

  console.log(newLog);

  Scores.updateScore(req.params.Score_ID, newScore, (err, result) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      Childs.updateChilds(req.body.Child_ID, type, (err, result) => {
        if (err) {
          res.status(400).json({ error: true, message: err });
        } else {
          Log.InsertLogusedApp(newLog, (err, result) => {
            if (err) {
              res.status(400).json({ error: true, message: err });
            } else {
              res
                .status(200)
                .json({ error: false, message: "อัพเดทผลคะแนนสำเร็จ" });
            }
          });
        }
      });
    }
  });
};

exports.GetMyType = (req, res) => {
  Scores.getMyTypeByChildID(req.params.Child_ID, (err, result) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      res.status(200).json({ error: false, result: result });
    }
  });
};

exports.GetHistory = (req, res) => {
  Log.ReciectHistory(req.params.Child_ID, (err, result) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      res.status(200).json({ error: false, result: result });
    }
  });
};

exports.DeleteAccount = (req, res) => {

  const convert = (from, to) => str => Buffer.from(str, from).toString(to)
  const utf8ToHex = convert('utf8', 'hex')
  const hexToUtf8 = convert('hex', 'utf8')
  
  Log.DeleteAccount(req.body.ChildID, (err, result) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      User.removeAccount(hexToUtf8(req.body.UserID), (err, result) => {
        if (err) {
          res.status(400).json({ error: true, message: err });
        } else {
          Childs.removeMyChilds(req.body.ChildID, (err, result) => {
            if (err) {
              res.status(400).json({ error: true, message: err });
            } else {
              Scores.removeMyScore(req.body.ScoreID, (err, result) => {
                if (err) {
                  res.status(400).json({ error: true, message: err });
                } else {
                  res
                    .status(200)
                    .json({ error: false, message: "ลบบัญชีสำเร็จ" }); //
                }
              });
            }
          });
        }
      });
    }
  });
};
