import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "success",
    message: "Welcome to the PH-University API",
  });
});

export default app;
