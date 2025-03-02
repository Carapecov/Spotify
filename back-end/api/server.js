import express from 'express';
import cors from 'cors';
import { db } from "./connect.js"


const app = express();
const port = 3000;

app.use(cors());
origin: 'http://localhost:5173';

app.get('/', (request, response) => {
  response.send("Hello World!");
})

app.get('/artists', async(request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
  })

app.get('/songs', async(request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
  })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });