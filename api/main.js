import express from "express";
import cors from "cors";
import connectToDatabase from "./mongo";
import mAdmin from "./magic";
import { ParkModel } from "./parkSchema";
const app = express();
// import { Magic } from '@magic-sdk ...'
//npm install --save ....
// const mAdmin = new Magic TestKey
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(async (res, req, next) => {
  try {
    await connectToDatabase();
    next();

    // const connection = await connectToDatabase();
    // req.db = connection;
    // next();
  } catch (err) {
    console.log(err);
    next(err);
  }
});
app.use(async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    next(new Error("Authorization token not found"));
    return;
  }
  const DIDToken = authorization.substring(7);
  mAdmin.token.validate(DIDToken);
  const metadata = await mAdmin.users.getMetadataByToken(DIDToken);
  const user = await ParkModel.findOne({ email: metadata.email });
  req.user = user;
  next();
});

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(new Date().toLocaleDateString());
});

app.get("/api/parks", (req, res) => {
  res.json(req.data.fullName);
});

app.get("/api/headers", (req, res) => {
  res.json(req.headers);
});

app.get("/api/parks", async (req, res) => {
  try {
    const collection = await req.db.collection("parks");
    const parks = await collection.find({}).toArray();
    res.json({
      parks,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error :(");
    // req.db.find{}
  }
});

app.get("/api/parks/images", async (req, res) => {
  res.status(200).send("Park Images Fetched");
  try {
    const parkImages = await req.db.collection("images");
    res.json({
      parkImages,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error Fetching Park Images");
  }
});

app.post("/api/parks", async (req, res) => {
  try {
    const collection = await req.db.collection("parks");
    const parks = await collection.find({}).toArray();
    res.json({
      parks,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error :(");
    // req.db.find{}
  }
});

export default app;
