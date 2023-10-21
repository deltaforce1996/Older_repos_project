var Types = require("../modal/Type");

exports.readMyType = (req,res) =>{
  let arr = [];
  arr.push(req.body.Type_ID_No_Frist)
  arr.push(req.body.Type_ID_No_Second)
  arr.push(req.body.Type_ID_No_Third)
    Types.getMyType(arr,(err,result)=>{
        if (err)
        res.send(err);
      res.json(result);
    });
};