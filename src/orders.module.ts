import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class OrderModule {
  constructor(){
    console.log("Order Module")
  }
}
