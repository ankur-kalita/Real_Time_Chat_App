"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWT {
    constructor(signature) {
        this.signature = signature;
        this.jwt = jsonwebtoken_1.default;
    }
    sign(secret) {
        const token = this.jwt.sign(this.signature, secret);
        return token;
    }
    verify(token) {
        try {
            const decoded = this.jwt.verify(token, this.signature);
            return decoded;
        }
        catch (err) {
            console.log('Token verification failed: ', err);
            return null;
        }
    }
}
exports.default = new JWT("appSignature");
