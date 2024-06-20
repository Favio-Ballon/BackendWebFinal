import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const usersRouter = Router();

usersRouter.get('/', UserController.getAll);
usersRouter.post('/', UserController.create);


export default usersRouter;