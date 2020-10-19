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
use App\RootLibs;
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
            //return $results = RootLib::where('user_id', 1)->get();
            return $this->createLibsTree(RootLib::where('user_id', 1)->get()->first());
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
            if ($r->isRoot){
                
            }
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
        //return $lib->libs;
        if (isset($lib->libs)){
            foreach(json_decode($lib->libs) as $libId){
                $lib = Lib::find($libId)->get()->first();
                if ($lib){
                    $lib['libs'] = $this->createLibsTree($lib);
                    $result['libs'][] = $lib;
                }else {
                    throw new \Error('Cannot find an appropriate lib!');
                }
               
            }
        }

        return $result;
    }
}
