import { Module } from '@nestjs/common';
import { studentController } from './app.controller';
import { StudentService } from './app.services';
import { OrderModule } from './orders.module';
import { UserModule } from './users.module';

@Module({
  imports: [OrderModule,UserModule],
  controllers: [studentController],
  providers: [StudentService],
})
export class RootModule {
  constructor(){
    console.log("Root Module")
  }
}
