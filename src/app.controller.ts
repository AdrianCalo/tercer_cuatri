import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './app.service';

@Controller('books')
export class BooksController {
  //constructor(private readonly appService: AppService) {}
//
  //@Get()
  //getHello(): string {
  //  return this.appService.getHello();
  //}
constructor(private booksService:BooksService ){}
  @Get()
  getBooks(){
    //me tiene que retornar algo
    return this.booksService.getBooks();
  }

  @Get(':id')
  getbook(@Param('id') id:number){
    return this.booksService.getBook(id)
  }

}


//consultar porqeu debo borrar toda la clase jutno con sus metodos en 
//app.controller y app.servis para que m,e muestre mi html
// pero los demas no borran nada! 🤬