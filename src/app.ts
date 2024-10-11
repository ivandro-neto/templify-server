import dotenv from "dotenv";
import express from "express";
import type {Request, Response} from 'express'
import { connect } from "./database";
import Routes from "./routes";
import SwaggerDocs from "./utils/swagger";
dotenv.config();

const app = express();
app.use(express.json());


app.get("/helloworld", (req: Request, res: Response) => {
  res.send("Running...");
});

app.use('/api/v1', Routes);

const Run = async (): Promise<void> => {
  try {
    await connect();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`running:: http://localhost:${port}/`));
    SwaggerDocs(app, Number(port));
  } catch (err) {
    console.error(err);
  }
};

Run();
