import { StreamService } from "../services/stream.service.js";

export class StreamController {
    static getStreams = async (req, res) => {
        const result = await StreamService.getStreams();
        res.status(200).json(result);
    };

    static getStreamById = async (req, res) => {
        const id = req.params.id;

        const result = await StreamService.getStreamById(id);

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Stream task not found"
            });
        }
    };

    static createStream = async (req, res) => {
        const result = await StreamService.createStream(req.body);
        res.status(201).json(result);
    };
    static replaceStream = async (req, res) => {
    const id = req.params.id;

    const result = await StreamService.replaceStream(id, req.body);

    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({
            message: "Stream task not found"
        });
    }
};

static updateStream = async (req, res) => {
    const id = req.params.id;

    const result = await StreamService.updateStream(id, req.body);

    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({
            message: "Stream task not found"
        });
    }
};

static deleteStream = async (req, res) => {
    const id = req.params.id;

    const result = await StreamService.deleteStream(id);

    if (result) {
        res.status(204).send();
    } else {
        res.status(404).json({
            message: "Stream task not found"
        });
    }
};
}
