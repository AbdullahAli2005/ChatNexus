import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

// Seed users (cricketers + others)
const seedUsers = [
    // Cricketers
    {
        email: "steve@email.com",
        fullName: "Steve Smith",
        password: "123456",
        profilePic: "",
    },
    {
        email: "kane@email.com",
        fullName: "Kane Williamson",
        password: "123456",
        profilePic: "",
    },
    {
        email: "james@email.com",
        fullName: "James Anderson",
        password: "123456",
        profilePic: "",
    },
    {
        email: "nathan@email.com",
        fullName: "Nathan Lyon",
        password: "123456",
        profilePic: "",
    },
];

const seedDatabase = async () => {
    try {
        await connectDB();

        await User.insertMany(seedUsers);
        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

// Call the function
seedDatabase();
