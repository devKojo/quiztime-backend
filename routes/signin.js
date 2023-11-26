var express = require('express');
var router = express.Router();


const users = [
  {
    email: "enochboison@gmail.com",
    name: "Enoch Boison"
  }, 
  {
    email: "enochboison@outlook.com",
    name: "Daniel Bontii"
  },
  {
    email: "enoch.boison@amalitech.com",
    name: "Daniel Adeaba"
  },
  {
    email: "enoch.boison@amalitech.org",
    name: "Rexon Itsiah"
  }
];

function lookUpUserById(email, arr){
  const userFound = arr.find((item)=> item.email === email);
  return userFound;
}


/* GET users listing. */
router.post('/', (req, res, next)=> {
  const get_user = lookUpUserById(req.body.email, users);
  if(get_user){
    res.status(200).send({
      message: "Successfully logged in.",
      name: get_user.name,
      email: req.body.email
    });
  }else{
    res.status(404).send({
      message: "Failed to log in.",
      name: "",
      email: ""
    });
  }
});


module.exports = router;
