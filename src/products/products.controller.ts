import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { createProductDto } from './dto/create-prodect.dto';
import { Product } from 'src/schemas/product.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  createProduct(
    @Body(ValidationPipe)
    product: createProductDto,
  ): Promise<Product> {
    return this.productService.create(product);
  }
  @UseGuards(AuthGuard)
  @Get()
  getProduct(): Promise<Product[]> {
    return this.productService.get();
  }
}
