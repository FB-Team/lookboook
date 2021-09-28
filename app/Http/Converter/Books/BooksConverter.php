<?php

namespace App\Http\Converter\Books;

use App\Book;
use App\Http\Converter\Books\Components\Page;
use App\Http\Converter\Interfaces\Converter;

abstract class BooksConverter implements Converter
{
    protected $file;
    protected $book;
    function __construct(Book $book)
    {
        $this->book = $book;
        $this->file = file_get_contents('storage/' . $book->path, 'r');
    }

    abstract function getPage(int $page): Page;
}
