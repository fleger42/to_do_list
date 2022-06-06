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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("../task/task.entity");
const typeorm_2 = require("typeorm");
const task_dto_1 = require("../../dto/task.dto");
let TaskService = class TaskService {
    constructor(taskRepository, dataSource) {
        this.taskRepository = taskRepository;
        this.dataSource = dataSource;
    }
    async addTask(createtaskDto) {
        const task = new task_entity_1.Task();
        task.task_name = createtaskDto.task_name;
        task.task_description = createtaskDto.task_description;
        task.task_status = false;
        await this.taskRepository.save(task);
        const taskDto = new task_dto_1.TaskDto();
        taskDto.task_id = task.task_id;
        taskDto.task_description = task.task_description;
        taskDto.task_name = task.task_name;
        taskDto.task_status = task.task_status;
        return (taskDto);
    }
    allTask() {
        return (this.taskRepository.find());
    }
    removeTask(id) {
        this.taskRepository.delete(id);
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map