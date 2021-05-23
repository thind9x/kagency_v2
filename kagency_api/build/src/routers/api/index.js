"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const roleRoutes = require('./roles');
const userRoutes = require('./users');
const router = express_1.default.Router();
router.use(express_1.default.json());
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send({ message: "Welcome to Kagency Management API" });
    }
    catch (error) {
        console.error(error.message);
    }
}));
router.use(roleRoutes);
router.use(userRoutes);
module.exports = router;
//# sourceMappingURL=index.js.map