<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RootLib extends Model
{
    protected $table = 'root_libs'; 
    protected $fillable = ['name', 'books', 'libs'];
    public function user(){
        return $this->belongsTo('App\User');
    }
    public function lib(){
        return $this->hasOne('App\Lib');
    }
    public function books(){
        return $this->hasMany('App\Book');
    }
    public function libs(){
        return $this->hasMany('App\Libs');
    }
}
