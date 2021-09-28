<?php

namespace App\Http\Converter\Books;

use App\Book;
use App\Http\Converter\Books\Components\Page;

class TXTConverter extends BooksConverter
{
    public function __construct(Book $book)
    {
        parent::__construct($book);
    }

    function getPage(int $page): Page
    {
        return new Page();
    }

    function convert()
    {
        return $this->save($this->file);
    }
    function save($content) {
        if (!session('currentBook'))
            session(['currentBook' => $content]);

        return session('currentBook');
    }
}
