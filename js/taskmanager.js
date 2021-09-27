// Create Task Function
function createTask(title, description, assignee, dueDate, status) {
    const html = 
    `<div class="card">
        <img src="images/edit-icon.svg" alt="Edit button" class="edit-icon">
            <div class="card-container">
                <h1>${title}</h1>
                <p class="card-desc">${description}</p>
                <p class="card-status">${status}</p>
            </div>
            <div class="card-footer">
                <span class="card-due-date">${dueDate}</span>
                <span class="card-assignee">${assignee}</span>
            </div>
    </div>`;
    return html;
};



// Define TaskManager Class
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }; 
    
    // Method for creating a new task
    addTask(title, description, assignee, dueDate, status) {
        const task = {
            // Increment the current Id for each new task
            id: this.currentId++,
            title: title,
            description: description,
            assignee: assignee,
            dueDate: dueDate,
            status: status,
          };
      
          this.tasks.push(task);
    } 

    // Render a HTML element
    render() {
        let tasksHtmlList = [];
        for(let i = 0; i < this.tasks.length;i++) {
            const date = new Date(this.tasks[i].dueDate);
            const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            const taskHtml = createTask(this.tasks[i].title,
                this.tasks[i].description,
                this.tasks[i].assignee,
                formattedDate,
                this.tasks[i].status.toUpperCase());
            tasksHtmlList.push(taskHtml);


        }
        const tasksHtml = tasksHtmlList.join("\n");
        const taskCardList = document.getElementById("task-card-list");
        taskCardList.innerHTML = tasksHtml;
    }
}     


// Submit Form Functions (validates inputs -> runs .addTask method)
function submitForm () {
    if (validateInput()===true) {
        taskManager.addTask(formTitle.value, formDescription.value, formAssignee.value, formDue.value, formStatus.value);      
        clearForm();
        toggleTaskForm();
        taskManager.render();
    }
};


// Delete task and close form for click on top-right X
function closeFormX () {
    let result = window.confirm("Are you sure you want to close and delete form?")
    if (result) {
        clearForm();
        toggleTaskForm();
    }
};