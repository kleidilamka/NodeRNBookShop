import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

import UserVerification from "../models/userVerificationModel.js";

import mailgun from "mailgun-js";

const DOMAIN = "sandbox5773a1f03cab4c89b6081c4344e553d2.mailgun.org";
const mg = mailgun({
  apiKey: "be0e2cfc2c3e2b54147d98b9ca0e8430-d2cc48bc-e354a745",
  domain: DOMAIN,
});

// @description Auth User & get token
// @route Post /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  res.send({ email, password });
});

// @description Register a new user
// @route Post /api/users/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, verified } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const CLIENT_URL = "http://localhost:5002";

  const token = jwt.sign({ name, email, password }, process.env.JWT_SECRET, {
    expiresIn: "20m",
  });

  const data = {
    from: "noreply@hello.com",
    to: email,
    subject: "Account activation link",
    html: `
    <h2>Please click on given link to activate your account</h2>
    <p>${CLIENT_URL}/authentication/activate/${token}</p>`,
  };

  mg.messages().send(data, function (error, body) {
    if (error) {
      return res.json({
        message: error.message,
      });
    }
    return res.json({
      message: "Email has been sent. Please activate your account",
    });
  });
});

// @desc    Activate registered account
// @route   GET /api/users/activate-account
// @access  Private
const activateAccount = asyncHandler(async (req, res) => {
  const { token } = req.body;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decodedToken) {
      if (err) {
        return res.status(400).json({ error: "Incorrect or expired token" });
      }
      const { name, email, password } = decodedToken;
      User.findOne({ email }).exec((err, user) => {
        if (user) {
          return res.status(400).json({ error: "User already exists" });
        }
        const newUser = new User({ name, email, password });
        newUser.save((err, success) => {
          if (err) {
            console.log("Error in signup", err);
            return res.status(400), json({ error: "Error activating account" });
          }
          res.json({ message: "Signup success!!" });
        });
      });
    });
  } else {
    return res.json({ error: "Something went wrong" });
  }
});

// @desc    Forget Password
// @route   GET /api/users/forget-password
// @access  Private
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "User with this email does not exists." });
    }

    const CLIENT_URL = "http://localhost:5002";

    const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD, {
      expiresIn: "20m",
    });

    const data = {
      from: "noreply@hello.com",
      to: email,
      subject: "Account activation link",
      html: `
    <h2>Please click on given link to reset your password</h2>
    <p>${CLIENT_URL}/resetpassword/${token}</p>`,
    };

    return user.updateOne({ resetLink: token }, function (err, success) {
      if (err) {
        return res.status(400).json({ error: "Reset password link error" });
      } else {
        mg.messages().send(data, function (error, body) {
          if (error) {
            return res.json({
              message: error.message,
            });
          }
          return res.json({
            message: "Email has been sent. Please follow the instructions",
          });
        });
      }
    });
  });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
  res.send("Success");
});

export {
  authUser,
  getUserProfile,
  registerUser,
  activateAccount,
  forgotPassword,
};
