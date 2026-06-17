const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    try {
        const existingUser = await User.findOne({
            email: req.body.email
        })
        if (existingUser) {
            return res.status(401).json({
                message: "User has been already registered"
            })
        }

        const hashpassword = await bcrypt.hash(req.body.password, 10)
        const newUser = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: hashpassword,
                address: req.body.address,
                gender: req.body.gender
            }
        )
        res.status(201).json({
            message: "User registered successfully",
            user: newUser
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Server error",
            error: err.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const existingUser = await User.findOne(
            { email: req.body.email }
        )
        if (!existingUser) {
            return res.status(401).json({
                message: "User not found"
            })
        }
        const ispassCorrect = await bcrypt.compare(req.body.password, existingUser.password)
        if (!ispassCorrect) {
            return res.status(401).json({
                message: "Password entered is incorrect"
            })
        }
        const token = jwt.sign(
            {
                id: existingUser._id
            },
            "mykeypswrd",
            {
                expiresIn: "7d"
            }
        )

        res.json({
            message: "login done...",
            token
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Server error",
            error: err.message
        })
    }
}