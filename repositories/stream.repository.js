import { database } from "../utils/database.js";
const collection = () => database.db.collection("streams");
let STREAMS = [
    {
        id: "1",
        title: "Design Twitch Banner",
        description: "Create banner for Twitch page",
        completed: false,
        color: "blue",
        hexColor: "#0000ff"
    },
    {
        id: "2",
        title: "Edit Stream Highlights",
        description: "Create YouTube shorts from latest stream",
        completed: false,
        color: "green",
        hexColor: "#00ff00"
    },
    {
        id: "3",
        title: "Schedule Instagram Post",
        description: "Post content from latest stream",
        completed: false,
        color: "red",
        hexColor: "#ff0000"
    }
]

export class StreamRepository {
    static getStreams = () => {
        return collection().find({}).toArray();
    };

    static getStreamById = (id) => {
        return collection().findOne({ id: id });

    };

    static createStream = async (newStream) => {
        console.log(newStream);

        await collection().insertOne(newStream);

        return newStream;
    };

    static replaceStream = async (id, replaceStream) => {
        console.log(replaceStream);

        const result = await collection().replaceOne(
            { id: id },
            replaceStream
        );

        if (result.matchedCount === 0) {
            return null;
        }

        return replaceStream;

    };

    static updateStream = async (id, updateStream) => {
        console.log(updateStream);

        const result = await collection().updateOne(
            { id: id },
            {
                $set: updateStream
            }
        );
        if (result.matchedCount === 0) {
            return null;
        }

        return collection().findOne({ id: id });
    };

    static deleteStream = async (id) => {
        const result = await collection().deleteOne({
            id: id
        });

        return result.deletedCount > 0
    };
}