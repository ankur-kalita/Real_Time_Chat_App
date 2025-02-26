"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("firebase/auth");
const FirebaseConfig_1 = __importDefault(require("../../FirebaseConfig/FirebaseConfig"));
const jwt_1 = __importDefault(require("../../utils/jwt"));
class AuthRoutes {
    constructor() {
        const app = (0, FirebaseConfig_1.default)();
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/login', this.hello);
        this.router.post('/login', this.loginUser);
    }
    hello(req, res) {
        res.status(200).json({ message: 'Hello World' });
    }
    loginUser(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        console.log(email, password);
        (0, auth_1.signInWithEmailAndPassword)((0, auth_1.getAuth)(), email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            if (!user.email)
                return;
            const userToken = jwt_1.default.sign(user.email);
            res.status(200).send({ user: userToken });
        })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error;
            console.log(errorCode, errorMessage);
            res.status(400).json({ error: "could not log in" });
        });
    }
}
exports.default = new AuthRoutes().router;
