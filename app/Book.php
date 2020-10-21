<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = ['name', 'extension', 'path', 'size'];
    public function lib()
    {
        return $this->belongsTo('App\Lib');
    }
}
