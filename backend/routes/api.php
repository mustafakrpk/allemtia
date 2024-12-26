<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\home\indexController;
use App\Http\Controllers\api\home\BlogController;

Route::group(['prefix' => 'home', 'as' => 'home.'], function () {
    Route::get('', [indexController::class, 'index'])->name('index'); // Ürünler için endpoint
    Route::get('blogs', [BlogController::class, 'index'])->name('blogs'); // Bloglar için endpoint
});
