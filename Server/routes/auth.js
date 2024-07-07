/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser=require('../middleware/fetchuser')

const JWT_SECRET ="ManishSonak";

//Create a User using POST "/auth". Doesn't Requir Auth
router.post(
  "/createuser",
  [
    body("name", "Enter a valid Name").isLength({ min: 1 }),
    body("password", "Password must be atleast 5 character").isLength({
      min: 5,
    }),
    body("email", "Enter a valid Email").isEmail(),
  ],
  async (req, res) => {

    let success=false;
    //If there are wrrors, return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      //  res.send("Hello")
    }

    // Check weather the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists " });
      }

      const salt = await bcrypt.genSalt(10);

      const secPass = await bcrypt.hash(req.body.password, salt);

      //create a new User
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Authenticate a User Using : Post "/auth/login". no login required

router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please enter correct email and password " });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please enter correct email and password " });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken=jwt.sign(data,JWT_SECRET);
      success =true;
      res.json({success, authtoken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  }
);

// Get loggedin User Details using POST "/auth/getuser" login required


router.post(
    "/getuser",fetchuser, async (req, res) => {

try {
    
    let userId=req.user.id;
    const user =await User.findById(userId).select("-password")
    res.send(user)
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
    })

module.exports = router;
