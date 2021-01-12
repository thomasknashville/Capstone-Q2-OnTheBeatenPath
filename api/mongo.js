//connect to mongo
//only connect if there is no connection

import url from "url";
import { MongoClient } from "mongodb";

// create cached variable to hold RTCPeerConnection

let cachedDb = null;
// set env variables w vercel
// const uri = process.env"cluster"cluster0.1y1xj.mongodb.net:27017
// https://vercel.com/docs/environment-variables
export default async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(uri, { useNewUrlParser: true });
  const db = await client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  return db;
}
