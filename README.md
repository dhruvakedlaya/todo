# Todo API

A simple RESTful API for managing Todos, built with Node.js, Express, and PostgreSQL (Supabase).

## How to Run

1. Clone the repository:
2. npm install
3. npm start
4. node server.js

## Testing in Postman
1. To Create Todo (POST)
   http://localhost:3000/api/todos
2. Get All Todos (GET)
   http://localhost:3000/api/todos
3. Get Todo by ID (GET)
   http://localhost:3000/api/todos/{id_number}
4. Update Todo (PUT)
   http://localhost:3000/api/todos/1
5. Delete Todo (DELETE)
   DELETE http://localhost:3000/api/todos/{id_number}

##Template
Body (raw JSON):
{
  "title": "Buy groceries",
  "description": "Milk, eggs, and bread"
}
