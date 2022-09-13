<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function rootLibrary(): ?Lib
    {
        return $this->hasOne('App\Lib', 'user_id')->where('libs_id', null)->get()->first();
    }
    public function libraries()
    {
        return $this->hasMany('App\Lib', 'user_id');
    }

    public function settings()
    {
        return $this->hasOne('App\CustomSettings', 'user_id');
    }

    public static function getDefaultUser(): User
    {
        $defaultUser = User::where('name', 'default')->get()->first();
        if (!$defaultUser) {
            $defaultUser = User::create([
                'name' => 'default',
                'email' => 'default@default.com',
                'password' => Hash::make('default'),
            ]);
            $defaultUser->libraries()->create(['libs_id' => null, 'name' => 'rootLib']);
        }
        return $defaultUser;
    }
}
