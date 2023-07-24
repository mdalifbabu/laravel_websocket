# laravel_websocket
socket api test!

add this below config on composer to install horizon

"config": {
  "platform": {
    "ext-pcntl": "8.0",
    "ext-posix": "8.0"
  }
}

$ php artisan make:event MessagePushed
$ composer require laravel/horizon
$ php artisan horizon:install
$ npm install -g laravel-echo-server
$ laravel-echo-server init
$ laravel-echo-server start 

**install redis
--------------
$ curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

$ echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

$ sudo apt-get update
$ sudo apt-get install redis

$ sudo service redis-server start

$ npm install --save laravel-echo

$ npm install --save socket.io-client