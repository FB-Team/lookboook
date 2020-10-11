<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomSettings extends Model
{
    protected $connection = 'settings'; 
    protected $fillable = ['styles', 'custom_settings'];
    public function user(){
        return $this->belongsTo('App\User');
    }
}
