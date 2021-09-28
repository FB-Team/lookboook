<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/reader', function () {
    return view('home');
});
Route::group(['prefix' => 'api'], function(){
    Route::group(['prefix' => 'filesApi'], function (){
        Route::resource('book', 'FilesApiController');
        Route::get('/userID', 'FilesApiController@getCurrentUserID');
    });
    Route::group(['prefix' => 'stylesApi'], function(){
        Route::resource('', 'StylesApiController');
        Route::patch('/update', 'StylesApiController@update');
    });
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
