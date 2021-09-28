class TaskManager {
    constructor(currentID = 0) {
        this.tasks = [];
        this.currentID = currentID;
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
          }
      
          TaskManager.tasks.push({ task})
        
    }
}
 

TaskManager.addTask('test', 'test', 'test', 'test', 'test');
console.log(TaskManager.tasks)