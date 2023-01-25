import { Product } from './db.model';
export declare class DbService {
    private WatchLists;
    private products;
    constructor();
    find(key: string): Promise<any>;
    create(name: string, data: Array<string>): Promise<any>;
    update(key: string, data: Array<string>): Promise<any>;
    getSingleProduct(productId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    private findProduct;
}
export declare class DbsService {
    private products;
    getProducts(): Product[];
}
