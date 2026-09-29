const express = require('express');
const User = require('./models/user.model');
const cors = require('cors');
const multer = require('multer')
const upload = multer()

const app = express();
module.exports = app;


app.use(express.json());
app.use(cors());


app.post("/signup", upload.none(), async (req, res) => {

  const {username, email, password} = req.body 

  const user = User.create({username, email, password})
  
  res.status(200).json({ message: "User created successfully" });
});


app.post("/login", upload.none(), async (req, res) => {
  const {username, password} = req.body;

  const user = await User.findOne({username})

  try {

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials", ok: false });
    }
    return res.status(201).json({ message: "You can login", ok: true });

  } catch (err) {
    return res.status(500).json({ message: "Internal server error"});
  }


})

