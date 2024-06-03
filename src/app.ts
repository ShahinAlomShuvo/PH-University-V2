import express, { Request, Response } from "express";
import router from "./Routes";
import errorHandler from "./middleware/errorHandler.middleware";
import notFound from "./middleware/notFound.middleware";
const app = express();

app.use(express.json());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "success",
    message: "Welcome to the PH-University API",
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
