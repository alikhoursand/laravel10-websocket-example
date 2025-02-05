<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/


Broadcast::channel('chat', function () {
    return true;
});

Broadcast::channel('pv-{chatId}', function () {
    return true;
});

Broadcast::channel('chat-{chatId}', function () {
    return ['user' => auth()->user()->name];
});
