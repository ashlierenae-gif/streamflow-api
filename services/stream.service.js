import { v4 as uuid } from "uuid";
import { StreamRepository } from "../repositories/stream.repository.js";

export class StreamService {
    static getStreams = () => {
        return StreamRepository.getStreams();
    };

    static getStreamById = (id) => {
        return StreamRepository.getStreamById(id);
    };

    static createStream = (newStream) => {
        newStream.id = uuid();

        return StreamRepository.createStream(newStream);
    };

    static replaceStream = (id, replaceStream) => {
        replaceStream.id = id;

        return StreamRepository.replaceStream(id, replaceStream);
    };

    static updateStream = (id, updateStream) => {
        updateStream.id = id;

        return StreamRepository.updateStream(id, updateStream);
    };

    static deleteStream = (id) => {
        return StreamRepository.deleteStream(id);
    };
}