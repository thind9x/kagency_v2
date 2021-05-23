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
const _database_1 = __importDefault(require("@database"));
const _queries_1 = require("@queries");
const _authentication_1 = require("@authentication");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { v4: uuidv4 } = require("uuid");
router.get("/projects", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield _database_1.default.queryDB(_queries_1.PROJECTQUERIES.FIND_ALL());
        return res.status(200).send({ data: result.rows });
    }
    catch (error) {
        return res.status(400).send({ error: error.message });
    }
}));
router.get("/projects/:uuid", _authentication_1.auth.verifyAccess, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield _database_1.default.queryDB(_queries_1.PROJECTQUERIES.FIND_BY_ID(req.params.uuid));
        if (result.rows.length == 0)
            return res.status(404).send({ message: "Data not found" });
        return res.status(200).send(result.rows[0]);
    }
    catch (error) {
        return res.status(400).send({ error: error.message });
    }
}));
router.post("/projects", _authentication_1.auth.verifyAccess, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, sub_description, detail, created_by, updated_by } = req.body;
        const data = {
            uuid: uuidv4(),
            title: !title ? "" : title,
            description: !description ? "" : description,
            sub_description: !sub_description ? "" : sub_description,
            detail: !detail ? "" : detail,
            created_by: !created_by ? "NULL" : created_by,
            updated_by: !updated_by ? "NULL" : updated_by
        };
        yield _database_1.default.queryDB(_queries_1.PROJECTQUERIES.CREATE(data));
        return res.sendStatus(200);
    }
    catch (error) {
        return res.status(400).send({ error: error.message });
    }
}));
module.exports = router;
//# sourceMappingURL=projects.js.map