"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const shared_1 = require("./shared");
let AppService = class AppService {
    constructor(db) {
        this.db = db;
        this.api_url = "https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_02391cb35d3c46b2a1001a0ccd2";
    }
    async getapi() {
        this.api_url = "https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_02391cb35d3c46b2a1001a0ccd2";
        const response = await fetch(this.api_url);
        var data = await response.json();
        console.log(data);
    }
    async getHello() {
        const result = await this.db.create('vitalikWatchlist', ['matic-network']);
        return `Hello World! ${JSON.stringify(result)}`;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shared_1.DbService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map