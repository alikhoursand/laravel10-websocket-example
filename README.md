
# Laravel 10 Websocket Example

A working Laravel mini app with basic breeze auth and websocket used for learning purposes and experimenting with real-time communication

Published just in case you need a working project to compare your own codes with.



## Features

- Basic WebSocket implementation with Laravel Echo and Pusher js .
- User authentication system (login and registration).
- Real-time communication using WebSockets.

## Installation 

### Prerequisites

- PHP >= 8.1
- Composer
- Node.js

### Installation Steps

1. Clone the project:
```bash
git clone https://github.com/alikhoursand/laravel10-websocket-example.git
```

2. Install Composer dependencies:

```bash
composer install
```
    
3. Install NPM dependencies:

```bash
npm install
```

4. Set up the environment file:

```bash
cp .env.example .env
```

6. Generate the application key:

```bash
php artisan key:generate
```

7. Set up the database and run migrations:
```bash
php artisan migrate
```

8. Configure the .env file accordingly (for local environment):

```bash
BROADCAST_DRIVER=pusher
LARAVEL_WEBSOCKETS_PORT=6001

PUSHER_APP_ID=testApp
PUSHER_APP_KEY=testApp
PUSHER_APP_SECRET=testApp
PUSHER_HOST=127.0.0.1
PUSHER_PORT=6001
PUSHER_SCHEME=http
PUSHER_APP_CLUSTER=mt1

VITE_APP_NAME="${APP_NAME}"
VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

9. Done! Run the project:
```bash
php artisan serve
```
```bash
php artisan websockets:serve
```
```bash
npm run dev
```

## For your information

I don't have any plans for future development of this project. It's made for learning purposes only.
