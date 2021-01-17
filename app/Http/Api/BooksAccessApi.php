<?php
namespace App\Http\Api;
use App\Book;
use App\Http\Api\BooksTransform;
use Error;
use Illuminate\Support\Facades\Storage;
use GuzzleHttp\Client;
class BooksAccessApi{
    protected $endpoint = 'http://fapi/gethtml';
    public static function getBook($id){
        $book = Book::find($id);
       //return $id;
        if (!$book){
            throw new  Error("Cannot find such a book");
        }
        $ext = $book->extension;
        $client = new \GuzzleHttp\Client();
        $response = $client->request('POST', $this->endpoint, ['multipart' => ['name' => 'book', 'contents' => fopen(storage_path($book->path), 'r')]]);
        return $response->getBody();
        //$contents = mb_convert_encoding(Storage::disk('public')->get(""), 'UTF-8');

        /* if ($contents){
            return ['meta' => $book, 'content' => $contents];
        }else{
            throw new Error("Cannot get contents of the book!");
        } */
    }
}