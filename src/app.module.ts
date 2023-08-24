import { Module } from '@nestjs/common';
//import { ServeStaticModule } from '@nestjs/serve-static';
//import { join } from 'path';
import { BooksModule } from './books/books.module'; 

@Module({
  
  imports: [BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
