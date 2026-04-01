import { Controller, Get, Post } from "@nestjs/common";
import { HomeService } from "./home.service";

@Controller('home')
export class HomeController {
    constructor (private homeService: HomeService) {}

    @Get('') getHomeTest() {
        return this.homeService.getHomeTest();
    }

    @Post('') postHomeTest() {
        return this.homeService.postHomeTest();
    }
}