import { DbService } from './db.service';
export declare class SharedController {
    private readonly dbService;
    constructor(dbService: DbService);
    getProduct(): any;
    getSProduct(prodId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
}
