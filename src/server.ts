import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(8888, () => console.log("Server rodando na 8888"));