const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3333;

app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
