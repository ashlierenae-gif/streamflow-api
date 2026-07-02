import express from "express";
import config from 'config';
import { streamRouter } from "./routes/stream.route.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { database } from "./utils/database.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/streams", streamRouter);

app.use(errorHandler);

const mongoConfig =config.get('mongo');
await database.setup({
    ...mongoConfig,
    appName: config.get('appName'),
});

app.listen(port, () => {
    console.log(`StreamFlow API listening at http://localhost:${port}`);
});