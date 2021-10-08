// Create Task Function
function createTask(title, description, assignedTo, dueDate, status, id) {
    const html = 
    `<div class="card" data-task-id=${id}>
        <img src="images/edit-icon.svg" alt="Edit button" class="edit-icon">
            <div class="card-container">
                <h1>${title}</h1>
                <p class="card-desc">${description}</p>
                <p class="card-status status-${status}">${status.toUpperCase()}</p>
                <span class="button-alt-text button-alt-text-id${id}"></span>
                <input type="image" src="images/checkmark.png" alt="Done Button" class="done-button button-clicked-${status}">
                <input type="image" src="images/delete.svg" alt="Delete Button" class="delete-button">
            </div>
            <div class="card-footer footer-${status}">
                <span class="card-due-date">${dueDate}</span>
                <span class="card-assigned">${assignedTo}</span>
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
    addTask(title, description, assignedTo, dueDate, status) {
        const task = {
            // Increment the current Id for each new task
            id: this.currentId++,
            title: title,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
          };
      
          this.tasks.push(task);
    } 

    updateTask(title, description, assignedTo, dueDate, status, taskId, taskPosition) {
        const task = {
            id: taskId,
            title: title,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
          };
      
          this.tasks[taskPosition] = task;
    }

    // Method to delete task
    deleteTask(taskId) {
        let result = window.confirm("Are you sure you want to delete this task?")
        if (result) {
            const newTasks = [];
            for(let i=0; i<this.tasks.length; i++) {
                const task = this.tasks[i];
                if (task.id !== taskId) {
                    newTasks.push(task)
                } 
            }
            this.tasks = newTasks;
        clearForm();
        this.render();
        this.save();
        }
    }   

    // Render task array into HTML display
    render() {
        let tasksHtmlList = [];
        for(let i = 0; i < this.tasks.length;i++) {
            
            let formattedValues = shortenCardValues(
                this.tasks[i].title,
                this.tasks[i].description,
                this.tasks[i].assignedTo,
                this.tasks[i].dueDate,
                this.tasks[i].status,
                this.tasks[i].id);
            
            
            // Create a HTML to represent the information retrieved and formatted above. Then push to a single array so that all HTML elements can be joined and rendered later.
            const taskHtml = createTask(formattedValues.title, formattedValues.description, formattedValues.assigned, formattedValues.date, formattedValues.status, formattedValues.id);
            tasksHtmlList.push(taskHtml);

            // Set current menu filter to display "Show All"
            const currentFilter = document.getElementById("current-filter");
            currentFilter.innerHTML = "Show All";
        }

        const tasksHtml = tasksHtmlList.join("\n");
        const taskCardList = document.getElementById("task-card-list");
        taskCardList.innerHTML = tasksHtml;

        if(this.tasks.length === 0) {
            taskCardList.innerHTML = `<div class="card" data-task-id="">
            <img src="images/edit-icon.svg" alt="Edit button" class="edit-icon">
            <div class="card-container">
              <h1>Welcome</h1>
              <p class="card-desc">Press the burger icon on the left to create a new form :)</p>
              <p class="card-status">STATUS</p>
            </div>
            <div class="card-footer">
              <span class="card-due-date">Due Date</span><span class="card-assigned">Assigned To</span>
            </div>   
          </div>`;
        }
    }

    // Method to filter by status
    renderByFilter(className) {
        let tasksHtmlList = [];
        for(let i = 0; i < this.tasks.length;i++) {
            if(this.tasks[i].status===className) {
                let formattedValues = shortenCardValues(
                    this.tasks[i].title,
                    this.tasks[i].description,
                    this.tasks[i].assignedTo,
                    this.tasks[i].dueDate,
                    this.tasks[i].status,
                    this.tasks[i].id);
                
                
                // Create a HTML to represent the information retrieved and formatted above. Then push to a single array so that all HTML elements can be joined and rendered later.
                const taskHtml = createTask(formattedValues.title, formattedValues.description, formattedValues.assigned, formattedValues.date, formattedValues.status, formattedValues.id)
                tasksHtmlList.push(taskHtml);
            }

        }
        const tasksHtml = tasksHtmlList.join("\n");
        const taskCardList = document.getElementById("task-card-list");
        taskCardList.innerHTML = tasksHtml;

        // Set current menu filter to display correct value
        const currentFilter = document.getElementById("current-filter");
        currentFilter.innerHTML = className;

    }
    
    // Finds Task by matching card info with stored array of tasks. Returns the task object found
    getTaskId(taskId) {
        let foundTask;
        
        // Compares the taskId (button task id) to the looped task
        this.tasks.forEach((getTask) => {
            const task = getTask;
            if(task.id === taskId) {
            foundTask = task;
        }
        });
        return foundTask;
    }

    // Finds Task by matching card info with stored array of tasks. Returns the index (i.e. position) of the card in the array
    getTaskPosition(taskId) {
        let foundIndex = 0;
        
        // Loops through task array
        for (let i=0; i<this.tasks.length; i++) {
            const task = this.tasks[i]
            // When task selected is the same as array, return index number
            if(task.id === taskId) {
                foundIndex = i;
            }
        }

        return foundIndex;
    }

    // Save to Local Storage
    save() {
        // Save tasks array
        let tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem("tasks", tasksJson);

        // Save current position/value of currentId
        let currentId = this.currentId;
        localStorage.setItem("currentId", currentId);
    }

    // Load from Local Storage
    load() {
        // Check if any tasks are locally stored, then retrieve/assign value
        if (localStorage.getItem("tasks")) {
            let tasksJson = localStorage.getItem("tasks");
            this.tasks = JSON.parse(tasksJson);
            taskManager.render();
        } else {
            document.getElementById("task-card-list").innerHTML = `<div class="card" data-task-id="">
            <img src="images/edit-icon.svg" alt="Edit button" class="edit-icon">
            <div class="card-container">
              <h1>Welcome</h1>
              <p class="card-desc">Press the burger icon on the left to create a new form :)</p>
              <p class="card-status">STATUS</p>
            </div>
            <div class="card-footer">
              <span class="card-due-date">Due Date</span><span class="card-assigned">Assigned To</span>
            </div>   
          </div>`
        };

        // Check if currentId is stored, then retrieve/assign value
        if (localStorage.getItem("currentId")) {
            let currentId = localStorage.getItem("currentId");
            this.currentId = parseInt(currentId);
            taskManager.render();
        } else {
            this.currentId = 0;
        }
    }




}     


// Shorten values to render neatly
function shortenCardValues (title, description, assigned, dueDate, status, id) {
    // Assign HTML to display when value is formatted and shortened
    const extraWords = "<span style='color: lightgrey'> ...</span>"

    // Format each task before rendering (e.g. title is too long)
    let formattedTitle = ""; 
        if(title.length > 30) {
            formattedTitle = title.substring(0,30) + extraWords;
        } else {
            formattedTitle = title;
        }

    let formattedDescription = ""; 
        if(description.length > 300) {
            formattedDescription = description.substring(0,300) + extraWords;
        } else {
            formattedDescription = description;
        } 

    let formattedAssigned = ""; 
        if(assigned.length > 20) {
            formattedAssigned = assigned.substring(0,20) + extraWords;
        } else {
            formattedAssigned = assigned;
        }
    
    const date = new Date(dueDate);
    const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    
    let formattedValues = {
        title: formattedTitle, 
        description: formattedDescription, 
        assigned: formattedAssigned, 
        date: formattedDate, 
        status: status, 
        id: id};

    return formattedValues;
}

// Submit Form Functions (validates inputs -> runs .addTask method)
function submitForm (newTask) {
    // Only run if input is valid
    if (validateInput()) {
        
        // Add New Task
        if(newTask === "new") {
            taskManager.addTask(formTitle.value, formDescription.value, formAssignedTo.value, formDue.value, formStatus.value);
            window.alert(`Task created successfully! :)`);   
        }

        // Update Existing Task
        if(newTask === "update") {
            taskManager.updateTask(formTitle.value, formDescription.value, formAssignedTo.value, formDue.value, formStatus.value, updateTaskId, updateTaskPosition);
            window.alert(`Task updated successfully! :)`);
        }
        
        // Reset form to default, update tasks displayed, save to local storage
        clearForm();
        toggleTaskForm();
        taskManager.render();
        taskManager.save();
    }
};


// Delete task and close form for click on top-right X
function closeFormX () {
    let result = window.confirm("Are you sure you want to close and clear form?")
    if (result) {
        clearForm();
        toggleTaskForm();
    }
};