import { DbService } from './shared';
export declare class AppService {
    private readonly db;
    constructor(db: DbService);
    api_url: any;
    getapi(): Promise<void>;
    getHello(): Promise<string>;
}
