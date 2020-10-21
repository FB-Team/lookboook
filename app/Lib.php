<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lib extends Model
{
    protected $table = 'libs'; 
    protected $fillable = ['name', 'books', 'libs'];
    public function books(){
        return $this->hasMany('App\Book');
    }
    public function lib(){
        return $this->hasOne('App\Lib');
    }
}
