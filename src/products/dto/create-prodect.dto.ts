import { IsNotEmpty } from 'class-validator';

export class createProductDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly price: number;
}
