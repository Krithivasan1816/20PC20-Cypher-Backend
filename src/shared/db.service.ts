/* eslint-disable @typescript-eslint/no-var-requires */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable,NotFoundException } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { Product } from './db.model';

@Injectable()
export class DbService {
  private WatchLists;
  private products: Product[] = [];
  constructor() {
    const dbLocal = require('db-local');
    const { Schema } = new dbLocal({ path: './databases' });
    this.WatchLists = Schema('WatchLists', {
      _id: { type: String, required: true },
      name: { type: String, default: 'Customer' },
      tokens: { type: Array, default: [] },
    });
  }

  async find(key: string) {
    const reqWList = this.WatchLists.find((obj: any) => {
      obj.name === key;
    });
    return reqWList;
  }

  async create(name: string, data: Array<string>) {
    const res = this.WatchLists.create({
      _id: uuid(),
      name: name,
      tokens: data,
    }).save();
    return res;
  }

  async update(key: string, data: Array<string>) {
    const reqWList = this.WatchLists.find((obj: any) => {
      obj.name === key;
    });
    const updatedTokens = reqWList.tokens.concat(data);
    const res = reqWList.update({ tokens: updatedTokens }).save();
    return res;
  }
  getSingleProduct(productId: string) {
    const product = this.findProduct(productId)[0];
    return { ...product };
  }
  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex(prod => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return [product, productIndex];
  }

}
export class DbsService {
  private products: Product[] = [];
  getProducts() {
    return [...this.products];
}
}
