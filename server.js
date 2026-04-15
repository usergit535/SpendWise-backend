require("dotenv").config({ path: "./backend.env" });
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 5050;
=======
const PORT =process.env.PORT || 5050;
>>>>>>> c389b1b03d16942aa63afb10a0e13a7460ff7ffa

connectDB();

// --- REPLACE YOUR OLD app.use(cors()) WITH THIS ---
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',                         // Local development
    'https://spendwise-frontend-coral.vercel.app'          // Your ACTUAL Vercel URL
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],         // Standard methods allowed
  allowedHeaders: ["Content-Type", "Authorization"]  // Standard headers allowed
}));
// --------------------------------------------------

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/v1", require("./routes/transactionRoutes"));
app.use("/api/v1/budgets", require("./routes/budgetRoutes"));
app.use("/api/v1/ai", require("./routes/aiRoutes"));

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
