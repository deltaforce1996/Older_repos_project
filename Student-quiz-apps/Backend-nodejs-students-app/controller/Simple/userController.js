var Users = require("../../modal/User");

exports.listOfUsers = (req, res) => {
    Users.getAllAccount((err, users) => {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", users);
        res.send({ error: false , message: "สำเร็จ",result:users});
    });
};

exports.createAccount = (req, res) => {
    var newAccount = new Users(req.body);

    if (
        !newAccount.User_ID == null ||
        !newAccount.User_Information  == null ||
        !newAccount.User_Child_ID  == null
    ) {
        res.status(400).send({ error: true , message: "กรุณาใส่ข้อมูลให้ครบถ้วน" });
    } else {
        Users.createNewAccount(newAccount, (err, result) => {
            if (err) res.send(err);
            res.status(200).json({error:false, message: "บันทึกข้อมูลสำเร็จ"});
        });
    }
};

exports.readMyAccount = (req, res) => {
    Users.getMyAccount(req.params.accountID, (err, result) => {
      if (err)
        res.send(err);
      res.json(result);
    });
  };

exports.updateMyAccount = (req, res) => {
    Users.updateAccount(req.params.accountID, new Users(req.body),(err, result) => {
      if (err)
        res.send(err);
        res.status(200).json({error:false, message: "แก้ไขข้อมูลสำเร็จ"});
    });
  };
  
  
  exports.deleteMyAccount = (req, res) => {
    Users.removeAccount(req.params.accountID, (err, result) => {
      if (err)
        res.send(err);
        res.status(200).json({error:false, message: "ลบบัญชีและข้อมูลของบัญชีสำเร็จ"});
    });
  };