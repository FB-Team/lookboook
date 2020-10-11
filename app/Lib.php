<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lib extends Model
{
    protected $table = 'libs'; 
    protected $fillable = ['name', 'books', 'libs'];
    public function rootLib(){
        return $this->belongsTo('App\RootLib');
    }
    public function lib(){
        return $this->hasOne('App\Lib');
    }
    public function elderLib(){
        return $this->belongsTo('App\Lib');
    }
    public function books(){
        return $this->hasMany('App\Book');
    }
}
