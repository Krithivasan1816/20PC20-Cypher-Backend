import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
interface SendDetailsDTO {
  name: string;
  designation: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get("/context")
  sendDetails(@Param() params: SendDetailsDTO) {
    // send response
    return {
      name: params.name,
      designation: params.designation,
    }}
  @Get('/users')
     async getHello(): Promise<string> {
     return this.appService.getHello();}
  @Get("/bitcoin")//for first task
  getBitcoinPrice() {
    return this.appService.getapi();
  }
  }
  

