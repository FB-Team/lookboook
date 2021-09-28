<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\CustomSettings;
use App\User;
use Error;
use PDO;
const DEFAULT_USER_ID = 1;
class StylesApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user() ?? User::find(1);

        return $user->settings['styles'] ?? [];
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
    public function store(Request $request)
    {
        //
    }
    /**
    * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response

     */
    public function show($id)
    {
        //
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
    public function update(Request $request)
    {
        $user = $this->getCurrentUserIfAvailable();
        $modified_data = false;
        if(isset($user->settings)){
            $modified_data = $user->settings()->update([
                'styles' => $request['styles'],
                'user_type' => 'plain',
                'custom_settings' => '{}'
            ]);
        }else{
            $modified_data = $user->settings()->create([
                'styles' => json_encode($request['styles']),
                'user_type' => 'plain',
                'custom_settings' => '{}'

            ]);
        }
        if($modified_data){
            return $user->settings['styles'];
        }else{
            throw new Error('Cannot update users styles');
        }
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
    *
    *   @return User ТЕКУЩЕГО ЗАРЕГЕСТРИРОВАННОГО ПОЛЬЗОВАТЕЛЯ, ЛИБО ПОЛЬЗОВАТЕЛЯ ПО УМОЛЧАНИЮ
    */
    public function getCurrentUserIfAvailable():? User{
        return User::find(!empty(Auth::user()) ? Auth::user()->id : DEFAULT_USER_ID);
    }
}
