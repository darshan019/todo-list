const taskLists = document.querySelector('.task-lists')

function projectClick(taskArray, project){
    project.addEventListener('click', () => {
        while(taskLists.firstChild){
            taskLists.removeChild(taskLists.lastChild);
        }

        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].folderName == project.innerText) {
                let task = document.createElement('div');
                task.classList.add('task');
                task.innerHTML = `
                <p>Title: ${taskArray[i].title}</p>
                <p>Priority: ${taskArray[i].priority}</p>
                <p>Date: ${taskArray[i].date}</p>
                <p>Description: ${taskArray[i].description}</p>
                <span><label for="check">Completed</label><input type="checkbox" value="true" id="check"></span>
                <button class="clear-task">Clear</button>`; 
                taskLists.appendChild(task);
        

                let clearButton = task.querySelector('.clear-task');
                clearButton.addEventListener('click', () => {
                    taskLists.removeChild(task);
                    taskArray.splice(i, 1);
                    localStorage.setItem('taskArray', JSON.stringify(taskArray)); 
                });
                let check = task.querySelector('#check')
                check.addEventListener('click', () => {
                    const para = task.getElementsByTagName('p')
                    if(check.checked){
                        for(let i = 0; i < para.length; i++){
                            para[i].style.textDecoration = 'line-through'
                        }
                        
                    }
                    else{
                        for(let i = 0; i < para.length; i++){
                            para[i].style.textDecoration = 'none'
                        }
                    }
                })
            }
        }
        
    })
}


export { projectClick }