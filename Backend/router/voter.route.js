import { Router } from "express";
import { login, vote, logout } from "../controller/voter.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = Router();

router.route('/login').post(login);
router.route('/vote').post(auth, vote);
router.route('/logout').post(auth, logout);

export default router;
