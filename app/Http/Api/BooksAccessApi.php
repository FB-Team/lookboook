<?php
namespace App\Http\Api;
use App\Book;
use App\Http\Api\BooksTransform;
use App\Http\Converter\Books\BooksConverterFactory;
use Error;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Http;
class BooksAccessApi{
    protected $endpoint = 'http://fapi/gethtml';
    public static function getBook($id){
        $book = Book::find($id);
        $converter = BooksConverterFactory::createConverter($book);
        return $converter->convert();
        $response = Http::attach('attachment', file_get_contents('storage/' . $book->path, 'r'), 'book')->post($endpoint);
        return $response->getBody();
        //$contents = mb_convert_encoding(Storage::disk('public')->get(""), 'UTF-8');

        /* if ($contents){
            return ['meta' => $book, 'content' => $contents];
        }else{
            throw new Error("Cannot get contents of the book!");
        } */
    }
}
