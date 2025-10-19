const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("🚀 SkyKube App running on EKS!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
