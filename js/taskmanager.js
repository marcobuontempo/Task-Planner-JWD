// Define TaskManager Class
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }  
    
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

}     


// Submit Form Functions (validates inputs -> runs .addTask method)
function submitForm () {
    if (validateInput()===true) {
        taskManager.addTask(formTitle.value, formDescription.value, formAssignee.value, formDue.value, formStatus.value);      
        clearForm();
    }
};