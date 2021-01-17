<?php
namespace App\Traits;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
trait ResourcesStorage{
    /**
     * Form correct resource name and directories and store the resource
     *
     * @param FileUpload $resource - resource needed to be stored
     * @param  String $parentalFolder, $itemFolder - root and children directories for the resource
     * @return String $link - path to the newly formed resource
     */
    public static function storeResource($resource, $parentalFolder, $nameModifier = ''){
        $latinName = Str::ascii($nameModifier) . '_' . Str::ascii($resource->hashName());        
        $link = Storage::putFileAs("books/$parentalFolder",$resource, $latinName);
        if($link)
            return $link;
        else throw new \Error("Path was corrupted");
    }
}