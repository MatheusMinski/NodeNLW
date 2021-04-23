import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingService {
    private setttingsRepository: Repository<Setting>

    constructor() {
        this.setttingsRepository = getCustomRepository(SettingsRepository)
    }

    async create({ chat, username }: ISettingsCreate) {

        const userAlreadyExists = await this.setttingsRepository.findOne({
            username
        })

        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const settings = this.setttingsRepository.create({
            chat,
            username
        });

        await this.setttingsRepository.save(settings);

        return settings;
    }
}

export { SettingService }