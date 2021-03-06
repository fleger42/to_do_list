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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const list_service_1 = require("./list/list.service");
const task_dto_1 = require("../dto/task.dto");
let AppController = class AppController {
    constructor(listservice) {
        this.listservice = listservice;
    }
    GetTodolist() {
        return this.listservice.allTask();
    }
    AddTask(taskDto) {
        this.listservice.addTask(taskDto);
        console.log('Name:' + taskDto.task_name);
        console.log('Status:' + taskDto.task_status);
        return ('Task added successfully');
    }
    RemoveTask(taskDto) {
        this.listservice.removeTask(taskDto);
        return ('Task removed successfully');
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "GetTodolist", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_dto_1.TaskDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "AddTask", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_dto_1.TaskDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "RemoveTask", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [list_service_1.ListService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map