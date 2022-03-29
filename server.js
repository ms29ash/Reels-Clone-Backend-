import express from "express";
import connectToMongo from "./db.js";
import Reel from './models/Reel.js';
import reelRouter from './routes/reels.js'


// App Config
const app = express();
const port = process.env.PORT || 9000;

// Middlewares
app.use(express.json());

// Connecst to db
connectToMongo();


// Routes
app.use('/', reelRouter);


app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
})
