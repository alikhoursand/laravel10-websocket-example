
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';



window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
    wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
    // wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
    debug: true,
});


// window.Echo.channel('chat').listen('.TicketSent', (eventData) => {
//     console.log(eventData);
// })
console.log(window.Echo.connector.pusher.connection.state);  // Should be 'connected'


// window.Echo.private('pv-' + 34)
//     .joining((event) => {
//         console.log('User joined');
//         console.log(event);
//         // Update user list or UI here
//     })
//     .listen('.MessageSent', (event) => {
//         console.log(event.message);
//     }).error((error) => {
//         console.log('error');
//     });


window.Echo.join('chat-' + 34)
    .here((users) => {
        console.log('Users in this chat:', users);
        // Handle the list of users already in the chat
    })
    .joining((user) => {
        console.log('User joined:', user);
        // Update UI with the new user
    })
    .leaving((user) => {
        console.log('User left:', user);
        // Update UI with the user leaving
    });

