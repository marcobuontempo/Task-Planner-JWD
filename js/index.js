// Initialise new TaskManager
const taskManager = new TaskManager(0);

// Click "Save Task" button -> verifies form
saveButton.addEventListener("click", submitForm);

// Click "Delete Task" button -> clears form details
deleteButton.addEventListener("click", clearForm);

