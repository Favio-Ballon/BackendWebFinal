import { UserModel } from "../models/user.js";
import { validateUser } from "../schemas/user.js";

export class UserController {
    static async getAll(req, res) {
        const users = await UserModel.getAll();
        res.json(users);
    }

    static async create(req, res) {
        const result = validateUser(req.body);
        if (result.error) {
            return res.status(422).json({ error: JSON.parse(result.error.message) });
        }
        const user = await UserModel.create({ data: result.data });
        res.status(201).json(user);
    }

}