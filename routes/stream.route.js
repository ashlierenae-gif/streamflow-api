import express from "express";
import { StreamController } from "../controllers/stream.controller.js";
import { colorMiddleware } from "../middleware/colorMiddleware.js";

export const streamRouter = express.Router();

streamRouter.get("/", StreamController.getStreams);
streamRouter.get("/:id", StreamController.getStreamById);
streamRouter.post("/", colorMiddleware, StreamController.createStream);
streamRouter.put("/:id", colorMiddleware, StreamController.replaceStream);
streamRouter.patch("/:id", colorMiddleware, StreamController.updateStream);
streamRouter.delete("/:id", StreamController.deleteStream);