<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Env extends Model
{
    protected $connection = 'env'; 
    protected $fillable = ['libs_path'];
}
