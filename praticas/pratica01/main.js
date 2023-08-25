import {getTasks, addTask, removeTask, updateTask} from "./tasks.js";
getTasks(). forEach((task) => {
    const {id, name, completed} = task
    console.log(id, name, completed)
})
addTask("Estudar React Native")
removeTask(1)
updateTask(2,{name:"estudar js", completed: true})
getTasks(). forEach((task) => {
    const {id, name, completed} = task
    console.log(id, name, completed)
})