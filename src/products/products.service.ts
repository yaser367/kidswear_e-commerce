import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/schemas/product.schema';
import { createProductDto } from './dto/create-prodect.dto';
import { GetProducts } from './dto/get-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(product: Product): Promise<createProductDto> {
    const { name, price } = product;
    const newProduct = await this.productModel.create({ name, price });
    return newProduct;
  }
  async get(): Promise<GetProducts[]> {
    const products = await this.productModel.find({});
    return products;
  }
}
