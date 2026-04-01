import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
    constructor () {}

    getHomeTest() {
        return 'Hello, World!';
    }

    postHomeTest() {
        return 'Success!';
    }
}
