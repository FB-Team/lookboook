<?php

namespace App\Http\Controllers;

use Api\BooksAccess;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\RootLib;
use App\Lib;
use App\User;
use App\Http\Requests\FilesCreateRequest;
use App\Http\Requests\FilesUpdateRequest;
use App\Api\BooksAccessApi;
use Error;
use Illuminate\Support\Facades\DB;
class FilesApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $id = Auth::id();
        if (!isset($id)){
            $id = 1;
        }
        $user = User::find($id);
        if (isset($user)){
            return $this->createLibsTree($user::libs()->where('type', 'root')->get()->first());
        }
        else throw new \Error("No appropriate users found in the database!");
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        $user = User::find(Auth::id());
        
        if ($user){
            $bookLibId = $user->libs()->where('type', 'root')->get()->first()->id;
            if (isset($r->lib)){
                $parent_lib = Lib::find($r->lib->parent_id);
                if (!$parent_lib){
                    throw new \Error("FilesApiControler::store - Could not find parent lib!");
                }
                $parent_lib->lib()->create([
                    'name' => $r->lib->name,
                    'type' => 'plain'
                ]);
                $bookLibId = $parent_lib->lib->id;
            }
            if (isset($r->books)){
                $lib = Lib::find($bookLibId);
                if (!$lib){
                    throw new \Error("FilesApiControler::store - cannot find lib by id!");
                }
                $dest = "books-$user->id";
                foreach ($r->books as $book){
                    if ($r->file($book)->move($dest, $r->file($book)->getClientOriginalName())){
                        $lib->books()->create([
                            'name' => $r->file($book)->getClientOriginalName()
                        ]);
                    }
                    else{
                        throw new \Error("FilesApiControler::store - cannot save the book!");
                    }
                }
                return $this->inex();
            }
        }else{
            //BooksAccess::
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id of the book
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return BooksAccess::getBook($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(FilesUpdateRequest $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    /**
     * Create tree of libs for sending to the client
     *
     * @param  Lib  $lib
     * @return \Illuminate\Http\Response
     */
    private function createLibsTree($lib){
        $result['books'] = $lib->books;
        $result['libs'] = [];
        if ($lib->libs){
            foreach($lib->libs as $sublib){
                    $result['libs'][] = $this->createLibsTree($sublib);
            }
        }

        return $result;
    }
}
