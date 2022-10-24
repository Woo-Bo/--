<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Lesson;
use App\Models\Sign;
use App\Models\System;
use App\Models\Topic;
use App\Models\User;
use App\Models\Video;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();

        $user = User::first();
        $user->name = '后盾人';
        $user->mobile = env('MOBILE');
        $user->email = '2300071698@qq.com';
        $user->save();
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        Topic::factory(50)->create();
        System::factory(10)->create();
        Lesson::factory(15)->create();
        Video::factory(100)->create();
        Sign::factory(5)->create();
    }
}