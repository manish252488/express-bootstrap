import { Express } from "express";
import exampleRouter from "./example.router";

export const registerRoutes = (app: Express): void => {
  app.use("/api/example", exampleRouter);
  // Add more routes here
};

export default registerRoutes;

