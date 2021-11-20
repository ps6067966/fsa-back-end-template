import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).json({ name: "Pratap" });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
