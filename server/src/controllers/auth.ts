import { Request, Response } from "express";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]).{8,}$/;

export async function login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body; // Destructure any necessary fields from the request body

    if (!email || email.trim() || !password || password.trim()) {
        res.status(400).send({
            status: 400,
            message: "Email and password are required"
        });
        return;
    }

    // Handle login logic here
    res.send("Login endpoint");
}

export async function signup(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body; // Destructure any necessary fields from the request body

    if (!email || email.trim() || !password || password.trim()) {
        res.status(400).send({
            status: 400,
            message: "Email and password are required"
        });
        return;
    }

    if (!passwordRegex.test(password)) {
        res.status(400).send({
            status: "error",
            message: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
        });

        return;
    }

    res.send("Signup endpoint");
}