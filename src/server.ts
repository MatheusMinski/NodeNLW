import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import "./database";
import { routes } from "./routes";


(async () => {
    await createConnection()
        .then(connection => {
            console.log('conexão com o db ok');
            const app = express();

            app.use(express.json());

            app.use(routes);

            app.listen(8888, () => console.log("Server rodando na 8888"));
        }).catch(error => console.log(error));
})()


