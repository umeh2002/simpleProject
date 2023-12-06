import cors from "cors";
import express, { Application, Request, Response } from "express";
import authRouter from "./router/authRouter";

const main = (app: Application) => {
  app.use(express.json());
  app.use(cors());

  app.get("/", async (req: Request, res: Response) => {
    try {
      return res.json({
        message: "success",
      });
    } catch (error: any) {
      return res.status(404).json({
        message: "error",
        data: error.message,
      });
    }
  });

  app.use("/api", authRouter);
};

export default main;
