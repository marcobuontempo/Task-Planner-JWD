// TASK MANAGER

    // Initialise new TaskManager
    const taskManager = new TaskManager(0);

    // Click "Save Task" button -> verifies form
    saveButton.addEventListener("click", submitForm);

    // Click "Delete Task" button -> clears form details
    deleteButton.addEventListener("click", clearForm);



// NAVBAR

    // Click Menu Button to Toggle: 
        /* Burger Icon <-> X, and
        Show or Hide Menu Options */
        menuButton.addEventListener("click", toggleMenu);


    // Click Create button in menu:
        // Shows form 
        createButton.addEventListener("click", toggleTaskForm);
        
        // Hides menu
        createButton.addEventListener("click", toggleMenu)
   


// TASK FORM

    // Hide Form when clicking 'X' on top right
    document.getElementById("closeTaskForm").addEventListener("click", toggleTaskForm);