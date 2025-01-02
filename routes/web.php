<?php

use App\Http\Controllers\SiteController;
use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
//    return view('welcome');
//});


Route::get('/', [SiteController::class, 'HomePage'])->name('HomePage');
Route::get('/profile', [SiteController::class, 'ProfilePage'])->name('ProfilePage');
