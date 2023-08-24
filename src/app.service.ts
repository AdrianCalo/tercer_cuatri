import { Injectable } from '@nestjs/common';
import { booksInterface } from './bookInterface';
//creo constante que contendra la URL base de la data
const booksURL='http://localhost:3150';


@Injectable()
export class BooksService {
 //async
    //creo metodo getbooks el cual devulve promesa del tipo <booksInterface[]>{
        //intenta{
            //traer la respuesta(const res= await fetch(`${booksURL}/books`))
            //lo parseamos const parsed = await res.json()
            //return parsed
        //}catch(error) //capturamos el error{
        //throw new Error('request error '+ error);    
    //    }
  //  }
  async getBooks():Promise <booksInterface[]>{
    try{                                  //porque funciona con books
      const res= await fetch(`${booksURL}/books`);//books es el endpoit con el que va a inicial el controlador 'books'
      const parsed= await res.json();//parceamos la data que viene 
      return parsed;//retornamos la data como objeto js
    }catch(error){
      throw new Error('request error' + error);
    }
  }

  async getBook(id:number):Promise<booksInterface>{
    try{                                    //no deberia ser libros
        const res= await fetch(`${booksURL}/books/${id}`);
        const parsed= await res.json();
        return parsed;
    }catch(error){
      throw new Error ('Request error'+ error);
    }
  }

}
