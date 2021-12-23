# Pizzeria

![Logo](./client/public/images/logo/logo-icon.png)

Delicious food in reasonable price

![Codacy Badge](https://api.codacy.com/project/badge/Grade/793141134a224f9685b797ec5a9cb0ff)
![Heroku](https://pyheroku-badge.herokuapp.com/?app=pizzeriia&style=flat)

## Features

-   Cart
-   Authentication
-   Checkout
-   Search
-   Offer list
-   Todays specials
-   admin panel

## Routes

-   /
-   /menu
-   /login
-   /signup
-   /account
-   /cart
-   /search
-   /checkout
-   /contact-us
-   /admin

## Tech Stack

**Client:** React, Scss, jsonwebtoken, Figma, Postman

**Server:** Node, Express, MongoDB, Mongoose, jsonwebtoken, Mail chimp, Stripe, Postman

## Color Reference

| Color   | Hex                                                              |
| ------- | ---------------------------------------------------------------- |
| Primary | ![#27ae60](https://via.placeholder.com/10/27ae60?text=+) #27ae60 |
| Black   | ![#192a86](https://via.placeholder.com/10/192a86?text=+) #192a86 |
| Grey    | ![#666666](https://via.placeholder.com/10/666666?text=+) #666666 |
| Light   | ![#EEEEEE](https://via.placeholder.com/10/eeeeee?text=+) #EEEEEE |

## Installation

Clone the project

```bash
  git clone https://github.com/aayushchugh/pizzeria.git
```

Go to the project directory

```bash
  cd pizzeria
```

Install dependencies for server

```bash
  yarn install
```

cd to client folder

```bash
  cd client
```

Install dependencies for client

```bash
  yarn install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URL`

`API_KEY`

`REACT_APP_API_KEY`

`JWT_SECRET`

## Run Locally

cd to root directory

```bash
  cd pizzeria
```

Start the backend server

```bash
  yarn dev
```

cd to client folder

```bash
  cd client
```

start client

```bash
   yarn start
```

## Api Reference

[Here](./API-REFERENCE.md)

## License

MIT License

Copyright (c) 2021 Ayush Chugh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
