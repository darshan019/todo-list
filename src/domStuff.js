import { projectClick } from "./projectClick.js";
import { deleteClick } from "./deleteBtn.js";

let folderOptions = JSON.parse(localStorage.getItem('folderOptions')) || [];

const proName = document.getElementById('name');

const sideBar = document.querySelector('.sidebar');

const projectDiv = document.querySelector('.project-div');

const submit = document.getElementById('submit');

let folder = document.getElementById('folder')

function submitHandler(taskArray) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (proName.value !== '') {
            const project = document.createElement('button');
            project.setAttribute('id', 'btn')
            project.textContent = proName.value;
    
            project.textContent = proName.value;
            if(folderOptions.indexOf(proName.value) >= 0){
                alert('The folder name already exists')
                return;
            }
    
            folderOptions.push(project.innerText)
            localStorage.setItem('folderOptions', JSON.stringify(folderOptions));
            projectDiv.appendChild(project);
    
            console.log(folderOptions)

            
            let option = document.createElement('option')
            option.value = folderOptions[folderOptions.length - 1]
            option.text = folderOptions[folderOptions.length - 1]
            folder.appendChild(option)

            deleteClick(projectDiv, folderOptions, taskArray, project)
    
            sideBar.appendChild(projectDiv);
            proName.value = '';

            projectClick(taskArray, project)
        }
    
        else {
            alert('Enter the name of the folder')
        }
    
    })
    if (localStorage.getItem('folderOptions')) {
        folderOptions = JSON.parse(localStorage.getItem('folderOptions'));
        folderOptions.forEach((folderName) => {
            const project = document.createElement('button');
            project.setAttribute('id', 'btn');
            project.textContent = folderName;
            deleteClick(projectDiv, folderOptions, taskArray, project)
            projectDiv.appendChild(project);
            projectClick(taskArray, project);
        });
    }
    window.addEventListener('load', () => {
        for(let i = 0; i <folderOptions.length; i++){
            let option = document.createElement('option')
            option.value = folderOptions[i]
            option.text = folderOptions[i]
            folder.appendChild(option)
        }
    })
}


export { submitHandler }