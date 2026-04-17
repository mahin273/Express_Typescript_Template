import type{ Request,Response } from "express";

export const pingHandler = (req: Request, res: Response):void => {
    res.send("Hello This is pong");

    console.log("request body: ", req.body);
    console.log("request query: ", req.query);
    console.log("request params: ", req.params);
};