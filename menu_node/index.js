const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/MenuDB')
    .then(() => console.log('mongodb connected'))
    .catch((err) => console.log(err));
//mongoose.connect("mongodb://localhost:27017/menuDB", { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schema & Model
const menuSchema = new mongoose.Schema({
    menuName: String,
    pathName: String,
    componentName: String,
    subMenu: [new mongoose.Schema({
        menuName: String,
        pathName: String,
        componentName: String,
        subMenu: [],
        role: String
    })],
    role: String
});

const Menu = mongoose.model("Menu", menuSchema,"Menu");

// API to get menu items
app.get("/api/menu", async (req, res) => {
  try {
    const menuItems = await Menu.find();
    console.log(menuItems);
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching menu items" });
  }
});

// Start Server
app.listen(8000, () => console.log("Server running on port 8000"));
