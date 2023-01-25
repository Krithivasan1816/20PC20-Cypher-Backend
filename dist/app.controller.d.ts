import { AppService } from './app.service';
interface SendDetailsDTO {
    name: string;
    designation: string;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sendDetails(params: SendDetailsDTO): {
        name: string;
        designation: string;
    };
    getHello(): Promise<string>;
    getBitcoinPrice(): Promise<void>;
}
export {};
