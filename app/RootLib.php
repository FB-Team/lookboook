<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RootLib extends Model
{
    protected $table = 'root_libs'; 
    protected $fillable = ['name', 'books', 'libs', 'user_id', 'user_type'];
    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
    public function lib(){
        return $this->hasOne('App\Lib');
    }
    public function books(){
        return $this->hasMany('App\Book', 'lib_id');
    }
    public function libs(){
        return $this->hasMany('App\Libs');
    }
}
