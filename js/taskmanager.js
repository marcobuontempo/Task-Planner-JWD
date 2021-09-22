class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }  
    
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
      
          this.tasks.push({ task });
        
    }
}     


// Submit Form
function submitForm () {
    if (validateInput()===true) {
        TaskManager.addTask(formTitle, formDescription, formAssignee, formDue, formStatus);
        clearForm();
    }
};