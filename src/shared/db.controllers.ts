import { Controller, Post ,Get,Param} from "@nestjs/common";
import { DbService } from './db.service';
@Controller('shared')
export class SharedController{
    constructor(private readonly dbService: DbService){}
    @Post()
    getProduct():any{}
    @Get(':id')
    getSProduct(@Param('id') prodId: string) {
    return this.dbService.getSingleProduct(prodId);
  }
}