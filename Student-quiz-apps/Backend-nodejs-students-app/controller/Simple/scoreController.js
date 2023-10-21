var Scores = require("../../modal/Score");

exports.listOfScore = (req, res) => {
    Scores.getAllScore((err, users) => {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", users);
        res.send(users);
    });
};

exports.createScore = (req, res) => {
    var newScore = new Scores(req.body);

    if (!newScore.Score_ID==null) 
    {
        res.status(400).send({ error: true, message: "กรุณาใส่ข้อมูลให้ครบถ้วน" });
    } else {
        Scores.addScore(newScore, (err, result) => {
            if (err) res.send(err);
            res.status(200).json({error:false, message: "บันทึกคะแนนสำเร็จ"});
        });
    }
};

exports.readScoreMyAccount = (req, res) => {
    Scores.getMyScore(req.params.scoreID, (err, result) => {
      if (err)
        res.send(err);
      res.json(result);
    });
  };

exports.updateScoreMyAccount = (req, res) => {
  Scores.updateScore(req.params.scoreID, new Scores(req.body),(err, result) => {
      if (err)
        res.send(err);
        res.status(200).json({error:false, message: "แก้ไขคะแนนสำเร็จ"});
    });
  };
  
  
  exports.deleteScoreMyAccount = (req, res) => {
    Scores.removeMyScore(req.params.scoreID, (err, result) => {
      if (err)
        res.send(err);
        res.status(200).json({error:false, message: "ลบคะแนนของบัญชีสำเร็จ"});
    });
  };