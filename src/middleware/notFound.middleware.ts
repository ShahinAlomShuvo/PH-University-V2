import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(404).send({
    success: false,
    message: "Route Not Found",
    error: "",
  });
};

export default notFound;
