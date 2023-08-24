import { Module } from '@nestjs/common';
import { BooksController } from './app.controller';
import { BooksService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  //ruta a la carpeta de archivos estaticos
  imports: [ServeStaticModule.forRoot({rootPath:join(__dirname, '..', 'client')} )
],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
