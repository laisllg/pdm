const tasks = [
{ id: 1, name: "estudar java script", complete: false },
{ id: 2, name: "estudar react", completed: false } 
];

const getTasks = () => tasks;
const addTask = (taskName) => {
  const newTask = { id: tasks.lenght + 1, name: taskName, completed: false }
  tasks.push(newTask)
};
 
const removeTask = (taskId) => {
    const index = tasks.findIndex((task) => task.id === taskId)
    tasks.splice (index, 1)
};

const updateTask = (taskId, taskProps) => {
    const index = tasks.findIndex((task) => task.id === taskId)
    tasks[index]={id: taskId, ...taskProps}
}
export {getTasks, addTask, removeTask, updateTask}

