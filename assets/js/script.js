let tasks = [
    { id: 1, description: "Hacer la compra", completed: false },
    { id: 2, description: "Estudiar para el examen", completed: false },
    { id: 3, description: "Ir al gimnasio", completed: true }
  ];
  let nextId = tasks.length + 1;
  
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const totalTasksSpan = document.getElementById('totalTasks');
  const completedTasksSpan = document.getElementById('completedTasks');
  
  function updateTasks() {
    taskList.innerHTML = '';
  
    const title = document.createElement('h5');
    title.textContent = 'ID - Tarea';
    taskList.appendChild(title);
  
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task.id} - </span>
        <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleCompleted(${task.id})"> 
        <span class="delete-icon" onclick="deleteTask(${task.id})">❌</span>
      `;
      taskList.appendChild(li);
    });
    totalTasksSpan.textContent = tasks.length;
    completedTasksSpan.textContent = tasks.filter(task => task.completed).length;
  }
  
  function addTask() {
    const description = taskInput.value.trim();
    if (description !== '') {
      tasks.push({ id: nextId++, description, completed: false });
      updateTasks();
      taskInput.value = '';
    }
  }
  
  function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateTasks();
  }
  
  function toggleCompleted(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    updateTasks();
  }
  
  updateTasks();
  
  
  