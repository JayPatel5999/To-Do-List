const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === ''){
        alert('Please write a task!');
    }
    else{
        const task = document.createElement('li');
        task.innerHTML = inputBox.value;
        task.classList.add('task');
        listContainer.appendChild(task);
        inputBox.value = '';
    }
}