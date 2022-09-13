<?php

namespace App\Http\Book;

use App\Http\Book\BookComponents\Page;
use App\Http\Book\BookComponents\PageComponent;

class Book extends PageComponent
{
    /**
     * @var Page[]
     */
    private array $pages;

    public function __construct(Page ...$pages){
        $this->pages = $pages;
    }
    public function getPages(): array {
        return $this->pages;
    }
    public function getContents(): array {
        return $this->getPages();
    }
}
