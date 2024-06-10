import mongoose from 'mongoose';

export class GetProducts {
  _id: mongoose.Types.ObjectId;
  name: string;
  price: number;
}
