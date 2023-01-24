const usermodel = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const find = await usermodel.findOne({ email });
    if (!find) {
      console.log("data")
      const hashPassword = await bcrypt.hash(password, 10);
      console.log("data1")
    let user = new usermodel({
        email,
        password: hashPassword,
      });
      await user.save()
      console.log("datasaved")
      
      return res.status(201).send({
        message: "User Created Successfully",
      });
    }
    return res.status(409).send({
      message: "User already exists",
    });
  } catch (error) {
    res.status(404).send(error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await usermodel.findOne({ email });
    const validate = bcrypt.compare(password, user.password);
    if (validate) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        "SECRET1234",
        {
          expiresIn: "7 days",
        }
      );
      return res.status(200).send({
        message: "Login successful",
        token,
      });
    }
    return res.status(401).send({
      message: "Invalid Credentials",
    });
  } catch (error) {
    res.status(404).send(error);
  }
};
module.exports = { signup, login };