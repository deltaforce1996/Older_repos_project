var Users = require("../modal/User");

exports.LogIn = (req, res) => {
  Users.getMyAccount(req.params.accountID, (err, result) => {
    if (err) {
      res.status(400).json({ error: true, message: "โปรดตรวจข้อมูล" });
    }else{
      if (result.length == 0) {
        res.json({ error: true, message: "โปรดลงชื่อเข้าใช้", result: result });
      } else {
        res.json({ error: true, message: "เข้าสู่ระบบสำเร็จ", result: result });
      }
    }
  });
};
