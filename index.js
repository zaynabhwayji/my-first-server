const express = require("express");
const app = express();
const PORT = 3000;

// Home route — plain text
app.get("/", (req, res) => {
    res.send("Hello from my first server!");
});

// JSON endpoint
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello, World!", success: true });
});

// Dynamic route parameter
app.get("/api/greet/:name", (req, res) => {
    res.json({ message: `Hello, ${req.params.name}!` });
});

//About route
app.get("/api/about", (req, res) => {
    res.json({
        name: "Your Name",
        favoriteTechnology: "Exress.js",
        yearStartedCoding: 2026
    });
});

app.get("/api/square/:number", (req, res) => {
    const number = parseInt(req.params.number);
    const square = number * number;
    res.json({ message: `Number: ${number}, Square: ${square}` });
});

app.get("/api/coffee", (req, res) => {
    res.json({ drink: "Coffee", price: 2.5 });
});

app.get("/api/tea", (req, res) => {
    res.json({ drink: "Tea", price: 2.0 });
});

app.get("/api/water", (req, res) => {
    res.json({ drink: "Water", price: 1.0 });
});

app.get("/api/time", (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({ currentTime });
});

app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
