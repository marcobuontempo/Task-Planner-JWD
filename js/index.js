// TASK MANAGER

    // Initialise new TaskManager
    const taskManager = new TaskManager(0);

    // Load Local Storage of Tasks and Render
    taskManager.load();

    // Click "Save Task" button -> verifies form
    saveButton.addEventListener("click", () => submitForm("new"));

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
            let result = window.confirm("Mark as 'Done'?")
        if (result) { 
            const parentTask = event.target.parentElement.parentElement;
            const taskId = Number(parentTask.dataset.taskId);
            const task = taskManager.getTaskId(taskId);
            task.status = "done";
            taskManager.render();
            taskManager.save();
            }
        }
    });


    // Event Listener to show button information when hover over
    taskList.addEventListener("mouseover", (event) => {
        const parentTask = event.target.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const altText = document.querySelector(`.button-alt-text-id${taskId}`);
        
        if (event.target.classList.contains("done-button")) {
            // Show button
            altText.innerHTML = "Mark as Done?";
            altText.style.visibility = "visible";
            altText.style.color = "green";
        }

        if (event.target.classList.contains("delete-button")) {
            // Show button
            altText.innerHTML = "Delete Task?";
            altText.style.visibility = "visible";
            altText.style.color = "red";
        }
    });


    // Event Listener to show button information when hover over
    taskList.addEventListener("mouseout", (event) => {
        const parentTask = event.target.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const altText = document.querySelector(`.button-alt-text-id${taskId}`);
        
        if (event.target.classList.contains("done-button")) {
            // Show button
            altText.innerHTML = "";
            altText.style.visibility = "hidden";
        }

        if (event.target.classList.contains("delete-button")) {
            // Show button
            altText.innerHTML = "";
            altText.style.visibility = "hidden";
        }
    });
    

    // Event Listener for Delete Button. Removes Task after clicking Delete button
    taskList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-button")) {
            const parentTask = event.target.parentElement.parentElement;
            const taskId = Number(parentTask.dataset.taskId);
            taskManager.deleteTask(taskId);
        }
    });


   
    // Update Tasks
        // Initialise variables that will store the existing ID and array position of card to edit
                let updateTaskId = 0;
                let updateTaskPosition = 0;
        // Event Listener to show form to Update Task info when card is clicked
        taskList.addEventListener("click", (event) => {
            // Only run if "card" element is clicked
            if (event.target.classList.contains("card")) {
                // Show form
                toggleTaskForm();
                
                // Select card element and find it's id
                const cardSelected = event.target;
                updateTaskId = Number(cardSelected.dataset.taskId);

                // Find card's stored info in tasks array. Assign to variable
                const task = taskManager.getTaskId(updateTaskId);
                updateTaskPosition = taskManager.getTaskPosition(updateTaskId);
                
                // Fill task form with existing info from selected card
                formTitle.value = task.title;
                formDescription.value = task.description;
                formAssignedTo.value = task.assignedTo;
                formDue.value = task.dueDate;
                formStatus.value = task.status;

                // Hide 'Save Task' Button and Show 'Update Task Button'      
                saveButton.style.display = "none";
                updateButton.style.display = "block";
                deleteButton.style.display = "block";
                
            }
        });
        // Listener event when submitting updated task form
        updateButton.addEventListener("click", () => submitForm("update", updateTaskId, updateTaskPosition))

        // Click "Delete Task" button
        deleteButton.addEventListener("click",  () => {
            taskManager.deleteTask(updateTaskId)
            taskManager.render();
            taskManager.save();
            toggleTaskForm();
        });



    // Filter By Status
        // TODO
        document.querySelector("#to-do-filter").addEventListener("click", (event) => {taskManager.renderByFilter(event.target.className)})

        // IN-PROGRESS
        document.querySelector("#in-progress-filter").addEventListener("click", (event) => {taskManager.renderByFilter(event.target.className)})

        // REVIEW
        document.querySelector("#review-filter").addEventListener("click", (event) => {taskManager.renderByFilter(event.target.className)})

        // DONE
        document.querySelector("#done-filter").addEventListener("click", (event) => {taskManager.renderByFilter(event.target.className)})

        // SHOW ALL
        document.querySelector("#show-all-filter").addEventListener("click", () => {taskManager.render()})
