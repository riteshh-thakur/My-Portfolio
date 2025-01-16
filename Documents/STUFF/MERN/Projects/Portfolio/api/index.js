


const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const validator = require("validator");


// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 7002; // Use port from .env or fallback to 7002
// const MONGO_URI = process.env.MONGO_URI // MongoDB URI from .env file

const MONGO_URI = "mongodb+srv://thakurritesh8219:Rishu%40123@cluster0.ea4ba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));



const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        // unique:true,
    },
    messages:[]
})


// save message
userSchema.methods.Messagesave = async function(message){
    try {
        this.messages = this.messages.concat({message});
        await this.save();
        return message;
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model("User", userSchema);

// Routes
app.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, mobile, message } = req.body;

    // Validation (add more as needed)
    if (!fname || !lname || !email || !mobile) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save data to MongoDB
    const newUser = new User({ fname, lname, email, mobile, message });
    await newUser.save();

    res.status(201).json({ status: 201, message: "User registered successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
