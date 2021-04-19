import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Iae json"
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Dale post"
    });
});


app.listen(8888, () => console.log("Server rodando na 3333"));