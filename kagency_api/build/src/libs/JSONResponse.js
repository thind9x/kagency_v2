"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JSONResponse {
    constructor() { }
    static success(req, res, message, data) {
        res.status(200).json({
            code: 200,
            message: message || "success",
            data: data,
        });
    }
    static serverError(req, res, message, data) {
        res.status(500).json({
            code: 500,
            message: message || "internal server error",
            data: data,
        });
    }
    static unautorizeError(req, res, message, data) {
        res.status(403).json({
            code: 403,
            message: message || "unauthorize",
            data: data,
        });
    }
}
exports.default = JSONResponse;
//# sourceMappingURL=JSONResponse.js.map