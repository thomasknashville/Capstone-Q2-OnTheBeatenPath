import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // DONT FORGET TO ADD ME!!!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(new Date().toLocaleDateString());
});

app.get("/api/me", (req, res) => {
  res.json({
    name: "Anthony",
    cool: true,
  });
});

export default app;
