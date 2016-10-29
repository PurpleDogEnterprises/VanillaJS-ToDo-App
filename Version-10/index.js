<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h1>To Do List</h1>
  <div>
    <button onclick="handlers.toggleAll()">Toggle All</button>
  </div>

  <div>
    <button onclick="handlers.addTodo()">Add</button>
    <input id="addTodoTextInput" type="text">
  </div>

  <div>
    <button onclick="handlers.changeTodo()">Change To Do</button>
    <input id="changeTodoPositionInput" type="number">
    <input id="changeTodoTextInput" type="text">
  </div>

  <div>
    <button onclick="handlers.toggleCompleted()">Toggle Completed</button>
    <input id="toggleCompletedPositionInput" type="number">
  </div>

  <ul>
  </ul>
  
  <script src="script.js"></script>
</body>

</html>
