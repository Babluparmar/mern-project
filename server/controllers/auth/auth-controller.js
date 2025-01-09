const bcrypt = require("bcryptjs")
const User = require("../../models/User")


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already in use",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "Registered successfully",
        });
    } catch (error) {
        console.error("Error during registration:", error.message);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

const login = async (req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({
            success : false,
            massage : "something went wrong"
        })
    }
}


module.exports = {registerUser}