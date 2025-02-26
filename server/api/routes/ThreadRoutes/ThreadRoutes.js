"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FirebaseConfig_1 = __importDefault(require("../../FirebaseConfig/FirebaseConfig"));
const database_1 = require("firebase/database");
class ThreadRoutes {
    constructor() {
        const app = (0, FirebaseConfig_1.default)();
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('', this.hello);
        this.router.post('/create', this.createThread);
    }
    hello(req, res) {
        res.status(200).json({ message: 'Thread Routes' });
    }
    createThread(req, res) {
        const threadData = req.body;
        const db = (0, database_1.getDatabase)();
        const generateId = () => {
            let id = "";
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < 10; i++) {
                id += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return id;
        };
        const threadId = generateId();
        const threadRef = (0, database_1.ref)(db, 'threads/' + threadId);
        (0, database_1.set)(threadRef, threadData);
        threadData.id = threadId;
        res.status(200).json({ message: 'Thread Created', thread: threadData });
    }
    getThreads(req, res) {
        const db = (0, database_1.getDatabase)();
        const user = req.body.email;
        const threads = [];
        const threadsRef = (0, database_1.ref)(db, 'threads/');
        (0, database_1.onValue)(threadsRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        });
    }
}
exports.default = new ThreadRoutes().router;
