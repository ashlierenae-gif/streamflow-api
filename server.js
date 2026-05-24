import express from "express";
import {streamRouter} from "./routes/stream.route.js";
import {errorHandler} from "./middleware/errorHandler.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/streams", streamRouter);

app.use(errorHandler);

app.listen(port, () =>{
    console.log(`StreamFlow API listening at http://localhost:${port}`);
});