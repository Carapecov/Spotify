import { MongoClient } from "mongodb";


const URI = "mongodb+srv://carapecova:1015capua18@cluster0.kolss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("Spotify")
const songCollection = await db.collection("songs").find({}).toArray();

console.log(songCollection);