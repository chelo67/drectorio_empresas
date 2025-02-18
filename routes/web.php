<?php

//use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;


//$role = Role::create(['name' => 'admin']);
//$role = Role::create(['name' => 'client']);


Route::get('/', function () {
    return view('welcome');
});



Route::get('/{any}', function () {
    return view('app'); // Laravel carga la vista de React
})->where('any', '.*');