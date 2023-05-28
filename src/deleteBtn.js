function deleteClick(projectDiv, folderOptions, taskArray, project) {
    const del = document.createElement('button')
    
    del.classList.add('del')

    del.addEventListener('click', () => {
        projectDiv.removeChild(project);
        folderOptions.splice(folderOptions.indexOf(project.innerText),1)
        let optionRemove = folder.querySelector(`option[value="${project.innerText}"]`)
        if(optionRemove){
            optionRemove.remove()
            for(let i = taskArray.length - 1; i >= 0; i--){
                if(taskArray[i].folderName === project.innerText){
                    taskArray.splice(i,1)
                }
            }
        }
        localStorage.setItem('folderOptions', JSON.stringify(folderOptions));
        localStorage.setItem('taskArray', JSON.stringify(taskArray));
    })

    project.appendChild(del);
}

export { deleteClick }