<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Env extends Model
{
    protected $table = 'env'; 
    protected $fillable = ['libs_path'];
}
