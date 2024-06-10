import { IsNotEmpty } from 'class-validator';

export class loginDto {
  @IsNotEmpty()
  readonly username: string;
  @IsNotEmpty()
  readonly password: string;
}
