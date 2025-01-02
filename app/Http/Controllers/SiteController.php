<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use function Termwind\render;

class SiteController extends Controller
{
    function HomePage()
    {
       // return view('home'); Blade view laravel
        return Inertia::render('HomePage');
    }

    function ProfilePage ()
    {
      return Inertia::render('ProfilePage');
    }

}
