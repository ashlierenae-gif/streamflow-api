export const colorMiddleware = (req, res, next) => {

    const colors = {
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff"
    };

    if (req.body.color && colors[req.body.color]) {
        req.body.hexColor = colors[req.body.color];
    }

    next();
};