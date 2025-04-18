const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
  let count = parseInt(req.cookies.count) || 0;
  count++;

  res.cookie("count", count, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  res.send(`<h1>🍪 Cookie Count: ${count}</h1><p>Refresh to increase the count!</p>`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
