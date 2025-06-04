import { Router } from "express";
import { login, signup } from "../controllers/auth";

const authRouter = Router();

authRouter.post("/login", (req, res) => {
    login(req, res).catch((error) => {
        console.error("Error during signup:", error);
        res.status(500).send("Internal Server Error during signup");
    });
});

authRouter.post("/signup", (req, res) => {
    signup(req, res).catch((error) => {
        console.error("Error during signup:", error);
        res.status(500).send("Internal Server Error during signup");
    })
});

export { authRouter };