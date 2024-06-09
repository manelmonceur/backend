import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParentService } from './parent.service';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { UpdateUserDto } from 'src/user/user.dto';

@Controller('parent')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Post()
  async create(@Body() createParentDto: CreateParentDto) {
    return await this.parentService.create(createParentDto);
  }

  @Get()
  async findAll() {
    return await this.parentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.parentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateParentDto: UpdateUserDto,
  ) {
    return await this.parentService.update(id, updateParentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.parentService.remove(id);
  }
}
