// TASK MANAGER

    // Initialise new TaskManager
    const taskManager = new TaskManager(0);

    // Load Local Storage of Tasks and Render
    taskManager.load();

    // Click "Save Task" button -> verifies form
    saveButton.addEventListener("click", submitForm);

    // Click "Delete Task" button

    // Click 'X' top-right of Form:
        document.getElementById("closeTaskForm").addEventListener("click", closeFormX);



// NAVBAR

    // Click Menu Button to Toggle: 
        /* Burger Icon <-> X, and
        Show or Hide Menu Options */
        menuButton.addEventListener("click", toggleMenu);


    // Click Create button in menu:
        // Shows form 
        createButton.addEventListener("click", toggleTaskForm);
        
        // Hides menu
        createButton.addEventListener("click", toggleMenu);



// TASK LIST

    // DOM Selector
    const taskList = document.querySelector("#task-card-list")

    // Event Listener for Done Button. Changes Task Status to "Done" after clicking Done button
    taskList.addEventListener("click", (event) => {
        if (event.target.classList.contains("done-button")) {
            const parentTask = event.target.parentElement.parentElement;
            const taskId = Number(parentTask.dataset.taskId);
            const task = taskManager.getTaskId(taskId);
            task.status = "done";
            taskManager.render();
            taskManager.save();
        }
    });

    // Event Listener for Delete Button. Removes Task after clicking Delete button
    taskList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-button")) {
            const parentTask = event.target.parentElement.parentElement;
            const taskId = Number(parentTask.dataset.taskId);
            taskManager.deleteTask(taskId);
            taskManager.render();
            taskManager.save();
        }
    });