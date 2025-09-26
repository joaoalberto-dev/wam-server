import { Injectable } from '@nestjs/common';

@Injectable()
export class SignupsService {
  create(createSignupDto: unknown) {
    return 'This action adds a new signup';
  }

  findAll() {
    return `This action returns all signups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signup`;
  }

  update(id: number, updateSignupDto: unknown) {
    return `This action updates a #${id} signup`;
  }

  remove(id: number) {
    return `This action removes a #${id} signup`;
  }
}
