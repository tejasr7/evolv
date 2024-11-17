import { MongoClient } from "mongodb";

// MongoDB URI and database name
const MONGO_URI = process.env.MONGO_URI; // Set in Vercel Environment Variables
const client = new MongoClient(MONGO_URI);
const dbName = "subscribers";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes("@")) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    try {
      // Connect to the database
      if (!client.isConnected) await client.connect();
      const db = client.db(dbName);
      const collection = db.collection("emails");

      // Insert the email into the collection
      await collection.insertOne({ email });
      res.status(200).json({ message: "Email saved successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    // If not a POST request, return 405 Method Not Allowed
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
