<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLibs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('libs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->morphs('libs');
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
        Schema::dropIfExists('libs');
    }
}
