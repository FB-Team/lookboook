<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lib extends Model
{
    protected $table = 'libs';
    protected $fillable = ['name', 'libs_id', 'user_id'];

    public function childrenLibraries(){
        return $this->hasMany('App\Lib', null, 'libs_id');
    }
    public function books(){
        return $this->hasMany('App\Book');
    }

    /**
     * Create tree of libs for sending to the client
     *
     * @param Lib $library
     * @param bool $isRoot
     * @return array
     */
    public function getLibsTree(Lib $library = null, bool $isRoot = true): array
    {
        if (!$library) {
            $library = $this;
        }
        $result[$library->name] = [];
        $result[$library->name]['books'] = $library->books;
        $result[$library->name]['books']['libs'] = [];

        if ($isRoot) {
            $result[$library->name]['isRoot'] = true;
        } else {
            $result[$library->name]['isRoot'] = false;
        }
        $childrenLibs = Lib::where('libs_id', $library->id)->get();
        if (!empty($childrenLibs)) {
            foreach ($childrenLibs as $childrenLib) {
                $result[$library->name]['books']['libs'] = $this->getLibsTree($childrenLib, false);
            }
        }

        return $result;
    }
}
