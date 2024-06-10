import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { loginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async login(user: loginDto): Promise<object> {
    const { username, password } = user;
    const data = await this.userModel.findOne({ username });
    if (!data) throw new NotFoundException('user not found');
    const isMatch = await bcrypt.compare(password, data.password);
    if (!isMatch) return { message: 'password not match' };
    const payload = { username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
      message: 'success',
    };
  }
}
