import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserSignupDto } from './auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() data: UserSignupDto) {
    return this.authService.signUp(data);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  // @ts-expect-error
  async signin(@Request() req) {
    return this.authService.signIn(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signout')
  // @ts-expect-error
  async signout(@Request() req) {
    return req.logout();
  }
}
