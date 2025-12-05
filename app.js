const fs= require('fs');
function loadtask(){
    const data= fs.readFileSync("tasks.json", "utf-8");
    return JSON.parse(data);
}
function savetask(tasks){
 fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
}
console.log("Task manager started");
const command = process.argv[2];
const value = process.argv[3];

if (command === "add") {
  const tasks = loadtask();
  const newTask = {
    id: tasks.length + 1,
    title: value,
    done: false
  };
  tasks.push(newTask);
  savetask(tasks);
  console.log("Task added:", newTask);
}
if (command === "list") {
  const tasks = loadtask();
  console.log("Your tasks:");
  tasks.forEach(t => {
    console.log(`${t.id}. ${t.title} - ${t.done ? "DONE" : "PENDING"}`);
  });
}
if (command === "remove") {
  const id = Number(value);
  let tasks = loadtask();

  tasks = tasks.filter(t => t.id !== id);

  tasks = tasks.map((t, index) => ({
    ...t,
    id: index + 1,
  }));

  savetask(tasks);
  console.log(`Task ${id} removed`);
}
if (command === "done") {
  const id = Number(value);
  const tasks = loadtask();

  const task = tasks.find(t => t.id === id);
  if (!task) {
    console.log("Task not found");
    process.exit(1);
  }

  task.done = true;
  savetask(tasks);
  console.log(`Task ${id} marked as done`);
}
if (command === "update") {
  const id = Number(value);
  const newTitle = process.argv[4];
  const tasks = loadtask();

  const task = tasks.find(t => t.id === id);
  if (!task) {
    console.log("Task not found");
    process.exit(1);
  }

  task.title = newTitle;
  savetask(tasks);
  console.log(`Task ${id} updated`);
}
