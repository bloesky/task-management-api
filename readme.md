# Task Management API

Simple RESTful API for managing tasks.

## Tech
- Node.js
- Express.js

## Features
- Create task
- Get all tasks
- Update task
- Delete task

## API Endpoints
| Method | Endpoint       | Description       |
|------|---------------|------------------|
| GET  | /tasks        | Get all tasks     |
| POST | /tasks        | Create new task   |
| PUT  | /tasks/:id    | Update task       |
| DELETE | /tasks/:id  | Delete task       |

## Run project
```bash
npm install
node index.js