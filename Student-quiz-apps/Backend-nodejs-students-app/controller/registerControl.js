var Childs = require("../modal/child");
var Users = require("../modal/User");
const crypto = require("crypto");

exports.Register = (req, res) => {

  var id = crypto.randomBytes(3).toString('hex');
  var childID = "C"+id+''+new Date().getMilliseconds();

  const convert = (from, to) => str => Buffer.from(str, from).toString(to)
  const utf8ToHex = convert('utf8', 'hex')
  const hexToUtf8 = convert('hex', 'utf8')


  var newchild = JSON.parse(
    JSON.stringify({
      Child_ID: childID,
      Child_Information: req.body.Child_Information,
      Child_Age: req.body.Child_Age,
      Score_ID: null,
      Type_ID_No_Frist: null,
      Type_ID_No_Second: null,
      Type_ID_No_Third: null
    })
  );

  // const secret = 'abcdefg';
  // var hash = crypto.createHmac('sha256', secret)
  //                .update('' + req.body.User_ID)
  //                .digest('hex');


  var newUser = JSON.parse(
    JSON.stringify({
      User_ID: utf8ToHex(req.body.User_ID),
      User_Information: req.body.User_Information,
      Child_ID: childID,
      User_Profile: req.body.User_Profile
    })
  );

  //  res.send(childID)

  var child = new Childs(newchild);
  var user = new Users(newUser);

  if (
    child.Child_ID == "" ||
    child.Child_Information == "" ||
    child.Child_Age == "" ||
    user.User_ID == "" ||
    user.User_Information == ""
  ) {
    res.status(400).json({ error: true, message: "กรุณาใส่ข้อมูลให้ครบถ้วน" });
  } else {
    Users.getMyAccount(hexToUtf8(user.User_ID), (err, result) => {
      if (result.length == 0) {
        Childs.addChilds(newchild, (error, result) => {
          if (error) {
            res.json(error); 
          } else {
            Users.createNewAccount(newUser, (err, result) => {
              if (err) {
                // console.log(hexToUtf8(user.User_ID));
                res
                  .status(400)
                  .json({ error: true, message: "บันทึกข้อมูลไม่สำเร็จ" });
              } else {
                res
                  .status(200)
                  .json({ error: false, message: "บันทึกข้อมูลสำเร็จ" });
              }
            });
          }
        });
      } else {
        res.status(400).json({ error: true, message: "บัญชีนี้ถูกใช้งานแล้ว" });
      }
    });
  }
};
