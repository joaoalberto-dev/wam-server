import { HttpException, HttpExceptionOptions } from '@nestjs/common';

export class UserAlreadyExistsException extends HttpException {
  constructor(
    objectOrError?: any,
    descriptionOrOptions?: string | HttpExceptionOptions,
  ) {
    super(objectOrError, 409);
  }
}
