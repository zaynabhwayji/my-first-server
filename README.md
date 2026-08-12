# Node.js + Express — First Server & First Endpoint

## Backend Track — Lesson 01

In this lesson, we learn the basics of **Node.js** and **Express** and build our first backend server and API endpoints step by step.

---

## 📚 What We Learn

1. What Node.js and Express are
2. How to set up a Node.js project
3. How to install Express
4. How to create and run a server
5. How to create a GET endpoint
6. How to return JSON responses
7. How to use dynamic route parameters
8. How to handle unknown routes with a 404 response

---

# 1. What are Node.js and Express?

## Node.js

**Node.js** allows us to run JavaScript outside the browser.

Before Node.js, JavaScript was mainly used inside web browsers for frontend development.

With Node.js, JavaScript can also be used for backend development.

For example, Node.js can be used to:

* Create web servers
* Build APIs
* Read and write files
* Work with databases
* Handle HTTP requests
* Build backend applications

## Express

**Express** is a lightweight and popular framework built on top of Node.js.

Node.js can create a server by itself, but Express makes it much easier to create routes and handle requests.

For example:

```js
app.get("/hello", (req, res) => {
    res.send("Hello!");
});
```

This means:

> When a client sends a GET request to `/hello`, send `"Hello!"` back.

This URL → function mapping is called a **route** or **endpoint**.

---

# 🧠 Mental Model

Think about a restaurant:

| Backend Concept | Restaurant                  |
| --------------- | --------------------------- |
| Client          | Customer                    |
| Server          | Kitchen                     |
| Endpoint        | Menu item                   |
| Request         | Customer's order            |
| Response        | Food served to the customer |

For example:

```text
GET /hello
```

The client is asking the server:

> "Give me the `/hello` resource."

The server responds:

```text
Hello!
```

---

# 2. Setting Up the Project

## Step 1 — Check Node.js and npm

Open your terminal and run:

```bash
node -v
npm -v
```

You should see version numbers.

Example:

```text
v20.11.0
10.2.4
```

If Node.js is not installed, install the **LTS version** from the official Node.js website.

---

## Step 2 — Create the Project

Create a new folder:

```bash
mkdir my-first-server
```

Enter the folder:

```bash
cd my-first-server
```

Initialize the Node.js project:

```bash
npm init -y
```

This creates:

```text
package.json
```

### What is `package.json`?

`package.json` contains information about your project, including:

* Project name
* Project version
* Dependencies
* Scripts

Think of it as the **ID card of your Node.js project**.

---

# 3. Install Express

Install Express with:

```bash
npm install express
```

This installs Express and creates the `node_modules` folder.

Your project will now contain:

```text
my-first-server/
│
├── node_modules/
├── package.json
└── package-lock.json
```

### Important Files

### `package.json`

Contains project information and dependencies.

### `package-lock.json`

Locks the exact versions of installed packages.

You normally should **not edit it manually**.

### `node_modules/`

Contains the actual installed packages.

You should **not commit `node_modules` to GitHub**.

Add it to `.gitignore`:

```text
node_modules/
```

---

# 4. Create Your First Server

Create a file called:

```text
index.js
```

Add:

```js
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from my first server!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

---

# 🔍 Line-by-Line Explanation

## 1. Import Express

```js
const express = require("express");
```

This loads the Express package that we installed with:

```bash
npm install express
```

`require()` is used to import a package into our Node.js file.

---

## 2. Create the Express Application

```js
const app = express();
```

This creates our Express application.

The `app` object will be used to:

* Create routes
* Configure the server
* Add middleware
* Start the server

---

## 3. Define the Port

```js
const PORT = 3000;
```

The server will listen on port `3000`.

We can access it through:

```text
http://localhost:3000
```

Think of the port as the **door number** of our server.

---

## 4. Create the Home Route

```js
app.get("/", (req, res) => {
    res.send("Hello from my first server!");
});
```

This creates a GET endpoint.

### `app.get()`

Means:

> Handle an HTTP GET request.

### `/`

The `/` represents the home URL.

### `req`

`req` means **request**.

It contains information about the request sent by the client.

### `res`

`res` means **response**.

It is used to send something back to the client.

### `res.send()`

```js
res.send("Hello from my first server!");
```

Sends a response back to the browser.

---

# 5. Start the Server

Run:

```bash
node index.js
```

You should see:

```text
Server running on http://localhost:3000
```

Open your browser and visit:

```text
http://localhost:3000
```

You should see:

```text
Hello from my first server!
```

Your first backend server is now running! 🎉

To stop the server:

```text
Ctrl + C
```

---

# 6. Create Your First JSON Endpoint

APIs commonly return data as **JSON**.

Add:

```js
app.get("/api/hello", (req, res) => {
    res.json({
        message: "Hello, World!",
        course: "Web Development Diploma",
        success: true
    });
});
```

Now visit:

```text
http://localhost:3000/api/hello
```

You should receive:

```json
{
    "message": "Hello, World!",
    "course": "Web Development Diploma",
    "success": true
}
```

## `res.json()`

`res.json()` sends a JavaScript object as JSON.

Express automatically sets the appropriate response header.

---

# 7. Dynamic Route Parameters

A route can receive a value directly from the URL.

Example:

```js
app.get("/api/greet/:name", (req, res) => {
    const name = req.params.name;

    res.json({
        message: `Hello, ${name}!`
    });
});
```

The `:name` part is a **dynamic route parameter**.

For example:

```text
/api/greet/Ahmad
```

Returns:

```json
{
    "message": "Hello, Ahmad!"
}
```

If we visit:

```text
/api/greet/Zeinab
```

We get:

```json
{
    "message": "Hello, Zeinab!"
}
```

The value is available through:

```js
req.params.name
```

---

# 🌐 HTTP Methods

These are the main HTTP methods we will use when building APIs:

| Method | Purpose               |
| ------ | --------------------- |
| GET    | Read data             |
| POST   | Create new data       |
| PUT    | Update data           |
| PATCH  | Partially update data |
| DELETE | Delete data           |

In this lesson, we mainly use:

```text
GET
```

---

# 8. Complete `index.js`

Here is the complete server:

```js
const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Hello from my first server!");
});

// JSON endpoint
app.get("/api/hello", (req, res) => {
    res.json({
        message: "Hello, World!",
        success: true
    });
});

// Dynamic route parameter
app.get("/api/greet/:name", (req, res) => {
    res.json({
        message: `Hello, ${req.params.name}!`
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

---

# 📝 Exercises

## Exercise 1 — Boot It Up ★☆☆

Create a project from an empty folder.

Requirements:

* Initialize the Node.js project
* Install Express
* Create `index.js`
* Start the server
* Make `localhost:3000` display a message
* Take a screenshot of the terminal output

---

## Exercise 2 — Your Own JSON Endpoint ★☆☆

Create:

```text
GET /api/about
```

It should return information about you.

Example:

```json
{
    "name": "Your Name",
    "favoriteTechnology": "JavaScript",
    "startedCoding": 2024
}
```

---

## Exercise 3 — Dynamic Route ★★☆

Create:

```text
GET /api/square/:number
```

The endpoint should calculate the square of the number.

Example:

```text
/api/square/5
```

Response:

```json
{
    "result": 25
}
```

### Important

Values from `req.params` are strings.

So you need to convert the value into a number:

```js
const number = Number(req.params.number);
```

Then calculate:

```js
const result = number * number;
```

---

## Exercise 4 — Tiny Menu ★★☆

Create three GET endpoints:

```text
/api/coffee
/api/tea
/api/water
```

Each endpoint should return the drink name and its price.

Example:

```json
{
    "drink": "Coffee",
    "price": 2
}
```

Test all three endpoints in your browser.

---

## Exercise 5 — Challenge ★★★

Create:

```text
GET /api/time
```

It should return the current server time using:

```js
new Date().toISOString()
```

Example:

```json
{
    "time": "2026-08-13T00:00:00.000Z"
}
```

Then create a **404 handler** for unknown routes:

```js
app.use((req, res) => {
    res.status(404).json({
        error: "Not found"
    });
});
```

This should be placed **after all your routes** and before the server ends.

---

# ✅ Self-Check

Before submitting the lesson, make sure:

* [ ] The server starts with `node index.js`
* [ ] The terminal prints the running message
* [ ] `localhost:3000` responds in the browser
* [ ] At least one endpoint returns JSON
* [ ] A dynamic `:param` route works with different values
* [ ] The `/api/square/:number` endpoint works correctly
* [ ] The menu endpoints work
* [ ] `/api/time` returns the current time
* [ ] Unknown URLs return a `404` JSON response
* [ ] `node_modules` is not committed to Git

---

# 🎯 What You Should Understand After This Lesson

By the end of Lesson 01, you should understand:

```text
Node.js
   ↓
Runs JavaScript on the backend
   ↓
Express
   ↓
Creates and manages the server
   ↓
Routes / Endpoints
   ↓
Receive requests
   ↓
Send responses
```

You should also understand the basic Express pattern:

```js
app.get("/route", (req, res) => {
    res.json({
        message: "Response"
    });
});
```

This pattern is the foundation for building APIs with Express.
