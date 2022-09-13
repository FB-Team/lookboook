<?php

namespace App\Http\Book\BookComponents;

class Page extends PageComponent
{
    /**
     * @var PageComponent[]
     */
    private array $components;

    public function __construct(PageComponent ...$components)
    {
        $this->components = $components;
    }

    public function getContents()
    {
        // TODO: Implement getContents() method.
    }
}
