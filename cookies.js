const express = require("express");
const cookieParser = require("cookie-parser");

// Create Express app
const app = express();

// Use cookie-parser middleware to parse cookies
app.use(cookieParser());

// Route to set a cookie
app.get("/set-cookie", (req, res) => {
  // Set a simple cookie that expires in 1 day
  res.cookie("username", "john_doe", {
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    httpOnly: true, // Cookie cannot be accessed by client-side JavaScript
  });

  // Set a cookie with more options
  res.cookie("preferences", JSON.stringify({ theme: "dark", language: "en" }), {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only sent over HTTPS in production
    sameSite: "strict", // Cookie will not be sent in cross-site requests
  });

  res.send('Cookies have been set! <a href="/get-cookie">View cookies</a>');
});

// Route to get cookies
app.get("/get-cookie", (req, res) => {
  const username = req.cookies.username || "Not set";
  const preferences = req.cookies.preferences
    ? JSON.parse(req.cookies.preferences)
    : "Not set";

  res.send(`
    <h1>Stored Cookies</h1>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Preferences:</strong> ${JSON.stringify(preferences)}</p>
    <p><a href="/clear-cookie">Clear cookies</a></p>
  `);
});

// Route to clear cookies
app.get("/clear-cookie", (req, res) => {
  // Clear individual cookies
  res.clearCookie("username");
  res.clearCookie("preferences");

  res.send(
    'Cookies have been cleared! <a href="/get-cookie">Verify cookies</a>'
  );
});

// Home page with links
app.get("/", (req, res) => {
  res.send(`
    <h1>Cookie Demo</h1>
    <ul>
      <li><a href="/set-cookie">Set Cookies</a></li>
      <li><a href="/get-cookie">View Cookies</a></li>
      <li><a href="/clear-cookie">Clear Cookies</a></li>
    </ul>
  `);
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Cookie demo server running at http://localhost:${PORT}`);
});
