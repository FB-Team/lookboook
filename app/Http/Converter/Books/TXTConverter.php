<?php

namespace App\Http\Converter\Books;

use App\Book;
use App\Http\Converter\Books\Components\Page;
use Illuminate\Support\Facades\Storage;

class TXTConverter extends BooksConverter
{
    public function __construct(Book $book)
    {
        parent::__construct($book);
    }

    function convert()
    {
        $this->file = file_get_contents('storage/' . $this->book->path, 'r');
        Storage::disk('local')->put('example.txt', $this->file);
        return $this->save($this->file);
    }
}
