var Childs = require("../../modal/child");


exports.listOfChilds = (req, res) => {
    Childs.getAllChilds((err, users) => {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", users);
        res.send(users);
    });
};

exports.createChilds = (req, res) => {
    var newChild = new Childs(req.body);

    if (!newChild.Child_ID==null) 
    {
        res.status(400).send({ error: true, message: "กรุณาใส่ข้อมูลให้ครบถ้วน" });
    } else {
        Childs.addChilds(newChild, (err, result) => {
            if (err) res.send(err);
            res.status(200).json({error:false, message: "บันทึกคะแนนสำเร็จ"});
        });
    }
};

exports.readMyChilds = (req, res) => {
    Childs.getMyChilds(req.params.childID, (err, result) => {
      if (err)
        res.send(err);
      res.json(result);
    });
  };

exports.updateMyChilds = (req, res) => {
    Childs.updateChilds(req.params.childID, new Childs(req.body),(err, result) => {
      if (err)
        res.send(err);
        res.status(200).json({error:false, message: "แก้ไขคะแนนสำเร็จ"});
    });
  };
  
  
  exports.deleteMyChilds = (req, res) => {
    Childs.removeMyChilds(req.params.childID, (err, result) => {
      if (err)
        res.send(err);
        res.status(200).json({error:false, message: "ลบคะแนนของบัญชีสำเร็จ"});
    });
  };

 