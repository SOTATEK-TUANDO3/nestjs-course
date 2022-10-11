import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private taskRepository: TasksRepository,
  ) {}

  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    console.log('executing');
    return this.taskRepository.getTasks(filterDto);
  }

  async getTaskByID(id: string): Promise<Task> {
    console.log('executing');
    const found = await this.taskRepository.findOne({ where: { id: id } });

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.taskRepository.deleteTask(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found!`);
    }
  }

  async updateTaskStatus(id: string, newStatus: TaskStatus) {
    const result = await this.taskRepository.update(id, { status: newStatus });
    console.log(result);
  }
}
