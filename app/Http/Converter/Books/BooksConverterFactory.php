<?php

namespace App\Http\Converter\Books;

use App\Book;

class BooksConverterFactory
{
    static public function createConverter(Book $book): BooksConverter {
      return new TXTConverter($book);
    }

}
