let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({text: text, completed: false });
        taskInputInput.value = "";
        updateTasksList();

    }
    
};

const updateTasksList = ()=> {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = " ";

    taskList.forEach(task => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <div class="taskItem">
            <div class="task">
                <input type="checkbox" class="checkbox" />
                <p>Zakończ projekt</p>
            </div>
            <div class="icons">
                <img src="./img/xxxx.png" />
                <img src="./img/yyy.png" />
            </div>
        </div>

        `
    })
}

document.getElementById("newTask").addEventListener("click", function(e){
    e.preventDefault();
    addTask();
})