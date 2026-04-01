import { Injectable } from '@nestjs/common';
import { ICreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PostgresDbService } from 'src/postgres-db/postgres-db.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private postgresDB: PostgresDbService) {}
  async create(createUserDto: ICreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return this.postgresDB.user.create({data: {...createUserDto, password: hashedPassword}});
  }

  async findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
