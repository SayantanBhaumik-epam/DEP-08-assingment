const tasks = [
    { taskName: "Write report", completed: true, priority: 2 },
    { taskName: "Attend meeting", completed: false, priority: 3 },
    { taskName: "Fix bug", completed: false, priority: 1 },
    { taskName: "Update website", completed: true, priority: 4 },
];

console.log(tasks.filter(task => task.priority > 3));
console.log(tasks.find(task => !task.completed));
console.log(tasks.reduce((total, task) => total + (task.completed ? 1 : 0), 0));

console.log("All task names:");
tasks.forEach(task => console.log(task.taskName));
