<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\FilesUpdateRequest;
use App\Traits\ResourcesStorage;
use App\Http\Api\BooksAccessApi;

class LibraryController extends Controller
{
    private User $user;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct(Request $request)
    {
        $this->user = $request->user;
    }

    public function index(): array
    {

        $result = [];
        if (isset($this->user) && !empty($rootLib = $this->user->rootLibrary())) {
            $result = $rootLib->getLibsTree() ?? [];
        }
        return $result;
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
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function store(Request $r)
    {
        $rootLib = $this->user->rootLibrary();
        $resultBooks = [];

        if ($rootLib) {
            foreach ($r->file() as $file) {
                $path = ResourcesStorage::storeResource($file, $this->user->id);
                $resultBooks[] = $rootLib->books()->create(['name' => $file->getClientOriginalName(), 'extension' => $file->extension(), 'path' => $path, 'size' => $file->getSize()]);
            }
        }

        return $resultBooks;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id of the book
     * @return \Illuminate\Http\Response
     */
    public function show(Request $r)
    {
        return BooksAccessApi::getBook($r['id']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(FilesUpdateRequest $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
