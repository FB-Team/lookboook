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
    }

    function save($content) {
        if (!session('currentBook'))
            session(['currentBook' => $content]);

        return session('currentBook');
    }
}
