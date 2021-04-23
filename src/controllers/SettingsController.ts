import { Request, Response } from "express";
import { SettingService } from "../services/SettingsService";


class SettingsController {

    async create(request: Request, response: Response) {
        const { chat, username } = request.body;

        const settinService = new SettingService();

        try {
            const settings = await settinService.create({ chat, username });

            return response.json(settings);
        } catch (err) {
            return response.status(400).json({
                message: err.message,
            });
        }

    }
}

export { SettingsController }