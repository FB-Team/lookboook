<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomSettings extends Model
{
    protected $table = 'settings'; 
    protected $fillable = ['styles', 'custom_settings', 'user_type'];
    public function user(){
        return $this->belongsTo('App\User','user_id');
    }
}
