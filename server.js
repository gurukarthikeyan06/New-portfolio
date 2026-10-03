const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test API
app.get("/api/test", (req, res) => {
    res.json({
        message: "Backend connected successfully!"
    });
});

// Contact API
app.post("/api/contact", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Message received successfully!"
    });
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});