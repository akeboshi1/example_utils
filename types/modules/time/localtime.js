"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Localtime = /** @class */ (function () {
    function Localtime() {
    }
    Localtime.prototype.getNow = function () {
        return new Date();
    };
    return Localtime;
}());
exports.Localtime = Localtime;
