<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\RootLib;
use App\Lib;
use App\User;
use App\Http\Requests\FilesCreateRequest;
use App\Http\Requests\FilesUpdateRequest;
use Error;
use Illuminate\Support\Facades\DB;
use App\RootLibs;
use App\Book;
use App\Traits\ResourcesStorage;
use App\Http\Api\BooksAccessApi;
class FilesApiController extends Controller
{
    protected $current_user_id;
    public function __construct()
    {
        $this->current_user_id = Auth::user()->id ?? 1;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {      
        $id = $this->current_user_id;           
        $user = User::find($id);
        
        if (isset($user)){
            $result = [];
            $result['libs']['root']['books'] = $user->rootLib->books()->get();            
            return $result;
            //! ОСТАВЛЯЮ ДЛЯ ЛУЧШИХ ВРЕМЕН, НУЖНО БУДЕТ ПРИ РЕАЛИЗАЦИИ ИНТЕРФЕЙСА БИБЛИОТЕК
            // return $this->createLibsTree(RootLib::where('user_id', 1)->get()->first());
        }
        else throw new \Error("No appropriate data found!");
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r){
        //return 'test';
        $user = User::find($this->current_user_id);
        $rootLib = $user->rootLib ?? $user->rootLib()->create(['name' => 'created_automatically','user_type' => 'user','user_id' => $user->id]);
        foreach ($r->file() as $file) {
            $path = ResourcesStorage::storeResource($file, $this->current_user_id);
            $rootLib->books()->create(['name' => $file->getClientOriginalName(), 'extension' => $file->extension(), 'path' => $path, 'size' => 0]);        
        }
        
        
        
        return $rootLib->books;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id of the book
     * @return \Illuminate\Http\Response
     */
    public function show(Request $r)
    {
        return BooksAccessApi::getBook($r['id']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
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
