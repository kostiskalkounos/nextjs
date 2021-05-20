// /api/new-meetup: If a request is sent to this url, it triggers the functions defined here

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // endpoint for creating new meetup
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://<fill>:<fill>@cluster0.zhrlh.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({ data });

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
