import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UserSigninDto, UserSignupDto } from './auth.dto';
import { UserAlreadyExistsException } from './exceptions/user-already-exists';
import bcrypt from 'bcrypt';
import { UserEntity } from 'src/users/users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtServices: JwtService,
    private userServices: UsersService,
  ) {}

  async signUp(data: UserSignupDto) {
    const userId = await this.userServices.findOne(data.email);

    if (userId) {
      throw new UserAlreadyExistsException(
        'A user with this email address already exists.',
      );
    }

    const salt = await bcrypt.genSalt();
    const encrypted = await bcrypt.hash(data.password, salt);

    return await this.userServices.create(
      new UserEntity({ ...data, password: encrypted }),
    );
  }

  async validateUser(data: UserSigninDto) {
    const user = await this.userServices.findOne(data.email);

    if (!user) return null;

    const passwordMatch = await bcrypt.compare(data.password, user.password);

    if (!passwordMatch) return null;

    return new UserEntity(user);
  }

  async signIn(user: UserEntity) {
    const payload = { username: user.email, sub: user.id };

    return {
      access_token: this.jwtServices.sign(payload),
    };
  }
}
