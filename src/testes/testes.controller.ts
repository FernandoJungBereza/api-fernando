import { Controller, Get, NotFoundException } from '@nestjs/common';
import { TestesService } from './testes.service';

@Controller('testes')
export class TestesController {
  constructor(private readonly testesService: TestesService) {}

  @Get()
  async findAll() {
    try {
      return await this.testesService.findAll();
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
