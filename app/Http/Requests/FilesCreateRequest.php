<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FilesCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'required|number',
            'name' => 'sometimes|string|min:3|max:30',
            'books' => 'sometimes|string',
            'parentLibId' => 'required|number'
        ];
    }
}
