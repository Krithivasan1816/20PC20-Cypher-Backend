import { Injectable } from '@nestjs/common';
import { DbService } from './shared';
//import { Product } from './shared';
//import { HttpService } from "@nestjs/axios";

@Injectable()
export class AppService {

  constructor(private readonly db:DbService) {}

  
  

  
// api url
   api_url:any = "https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_02391cb35d3c46b2a1001a0ccd2";
   async getapi() {
    this.api_url= "https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_02391cb35d3c46b2a1001a0ccd2";
    
    // Storing response
    const response = await fetch(this.api_url);
    
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    
}

// Defining async function
  // async getapi(api_url){
  //   const response = await fetch(url);
  //   var data = await response.json();
  //   console.log(data);
  // }
  // getapi(api_url);

// Storing data in form of JSO
// Calling that async function

  
  // async getPrice() {
  //   const data:any = await this.http
  //       .get('https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_02391cb35d3c46b2a1001a0ccd2')
  //       console.log(data)
  // constructor(private readonly db: DbService) {}
  // async getH(): Promise<string> {
  //   const URL='https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_02391cb35d3c46b2a1001a0ccd2'
  //   const res = URL
  //   //const result = await this.db.create('vitalikWatchlist', ['matic-network']);
  //   return `Hello Wold! ${JSON.stringify(res)}`;
  //   //return `Hello Wold! ${JSON.stringify(result)}`;
  // }
  async getHello(): Promise<string> {
  //   const URL='https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_02391cb35d3c46b2a1001a0ccd2'
  //   const res = await URL
      const result = await this.db.create('vitalikWatchlist', ['matic-network']);
  //  return `Hello Wold! ${JSON.stringify(res)}`;
      return `Hello World! ${JSON.stringify(result)}`;
  }
  
}
