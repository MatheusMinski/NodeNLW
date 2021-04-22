import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";


const routes = Router();

routes.post("/settings", async (request, response) => {
    const { chat, username } = request.body;
    // return response.json("aloha");
    const setttingsRepository = getCustomRepository(SettingsRepository);


    const settings = setttingsRepository.create({
        chat,
        username
    });

    await setttingsRepository.save(settings);

    return response.json(settings);
})

export { routes }