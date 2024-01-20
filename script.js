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
        // Adds delete button to each task
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '\u00d7';
        task.appendChild(deleteButton);
        inputBox.value = '';
    }
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        saveData();
    }
})

// Storing Data in Browser

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    const data = localStorage.getItem("data");
    if(data){
        listContainer.innerHTML = data;
    }
}
loadData()