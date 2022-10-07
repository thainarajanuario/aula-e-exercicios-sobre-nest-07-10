import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/Hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/Bsm')
  getBsm(): string{
  return this.appService.getBsm();
  }
  @Get('/objAprendizagem')
  getobjAprendizagem(): string{
  return this.appService.getobjAprendizagem();
  }
}
