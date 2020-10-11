<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRootLibs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('root_libs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->morphs('user');
            $table->text('name', 30);
            $table->json('books');
            $table->json('libs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('root_libs');
    }
}
