import './styles.css';
import { TaskInfo } from './taskInfo.js'
import { submitHandler } from './domStuff.js';

function component() {
    let content = document.getElementById('content')
    const addDetails = document.getElementById('add')

    //let taskArray = []

    let taskArray = JSON.parse(localStorage.getItem('taskArray')) || [];

    const addTaskInfoToArray = () => {
        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const folderName = document.getElementById('folder').value;
        const priority = document.getElementById('priority').value;
        const description = document.getElementById('description').value;

        let newTask = new TaskInfo(folderName, title, date, priority, description)

        taskArray.push(newTask);
        localStorage.setItem('taskArray', JSON.stringify(taskArray));
    }

    addDetails.addEventListener('click',addTaskInfoToArray)
    submitHandler(taskArray)

    
    return content;
}
document.getElementById('clrAll').addEventListener('click', () => {
    localStorage.clear();
})

document.body.appendChild(component())