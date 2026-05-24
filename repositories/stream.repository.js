let STREAMS =[
    {
        id:"1",
        title: "Design Twitch Banner",
        description:"Create banner for Twitch page",
        completed: false,
        color: "blue",
        hexColor: "#0000ff"
    },
    {
         id:"2",
        title: "Edit Stream Highlights",
        description:"Create YouTube shorts from latest stream",
        completed: false,
        color: "green",
        hexColor: "#00ff00"
    },
    {
          id:"3",
        title: "Schedule Instagram Post",
        description:"Post content from latest stream",
        completed: false,
        color: "red",
        hexColor: "#ff0000"
    }
]

export class StreamRepository {
    static getStreams = () => {
        return STREAMS;
    };

    static getStreamById = (id) => {
        return STREAMS.find(stream => stream.id === id);
    };

    static createStream = (newStream) => {
        console.log(newStream);

        STREAMS.push(newStream);

        return newStream;
    };

    static replaceStream = (id, replaceStream) => {
        const index = STREAMS.findIndex(stream => stream.id === id);

        if (index === -1) {
            return null;
        }

        console.log(replaceStream);

        STREAMS[index] = replaceStream;

        return replaceStream;
    };

    static updateStream = (id, updateStream) => {
        const stream = STREAMS.find(stream => stream.id === id);

        if (!stream) {
            return null;
        }

        Object.assign(stream, updateStream);

        console.log(stream);

        return stream;
    };

    static deleteStream = (id) => {
        const index = STREAMS.findIndex(stream => stream.id === id);

        if (index === -1) {
            return false;
        }

        STREAMS.splice(index, 1);

        return true;
    };
}