// TASK FORM VALIDATION

// 1. assign DOM elements
const formTitle = document.getElementById("form-title");
const formDescription = document.getElementById("form-desc");
const formAssignee = document.getElementById("form-assignee");
const formDue = document.getElementById("form-due");
const formStatus = document.getElementById("form-status-select");
const deleteButton = document.getElementById("deleteTaskBtn");
const saveButton = document.getElementById("saveTaskBtn");
const closeForm = document.getElementById("closeTaskForm");


// 2. create a function with if/else statement
let titleErrorMsg = "";
let descErrorMsg = "";
let assignErrorMsg = "";
let dueErrorMsg = "";
let statusErrorMsg = "";

function validateInput () {
    if (formTitle.value.length<5 || formDescription.value.length<5 || formAssignee.value.length<5 || formDue.value==="" || formStatus.value==="") {
    
        if (formTitle.value.length<5) {
            titleErrorMsg ="Your title is less than 5 characters long.\n";
        } else {
            titleErrorMsg ="";
        };
    
        if (formDescription.value.length<5) {
            descErrorMsg = "Your description is less than 5 characters long.\n";
        } else {
            descErrorMsg = "";
        }

        if (formAssignee.value.length<3) {
            assignErrorMsg = "Your assignee is less than 3 characters long.\n";
        } else {
            assignErrorMsg = "";
        };

        if (formDue.value==="") {
            dueErrorMsg = "Your form due date is empty.\n";
        } else {
            dueErrorMsg = "";
        };
        
        if (formStatus.value==="") {
            statusErrorMsg = "Your task status is empty.\n"
        } else {
            statusErrorMsg = "";
        };
        
    
        window.alert(`Please enter valid input:\n${titleErrorMsg}${descErrorMsg}${assignErrorMsg}${dueErrorMsg}${statusErrorMsg}`);
    } else {
        window.alert(`task created successfully`)
        TaskManager.addTask(formTitle, formDescription, formAssignee, formDue, formStatus);
        clearForm();
        console.log(TaskManager.tasks)
    }
}

function clearForm(){
    formTitle.value = ""
    formDescription.value =""
    formAssignee.value = "" 
    formDue.value ="" 
    formStatus.value = ""
    
}

// 3. Listener event
saveButton.addEventListener("click", validateInput)
deleteButton.addEventListener("click", clearForm)
    
// Check if the Task Name input value is more than 5 characters.
// Check if the Task Description input value is more than 5 characters.
// Check if the Assigned To value is more than 5 characters.
// Check if the Task Due Date input value is not empty.
// Check if the Task Status input value is not empty.


// 1. assign the id of each input on task form to a variable
// e.g    const title = document.getElementById(form-title)
//        const description= document.getElementById(form-desc)
//        const assignee= document.getElementById(form-due)
//        const status = document.getElementById(form-status-select)

// 2. create a function with if/else statement

// let titleErrorMsg;
// let descErrorMsg;
// let assignErrorMsg;
// let statusErrorMsg;

// function validateInput () {
//     if (title.legnth<5 || assignee.length<10) {
    
//         if (title.length<5) {
//             titleErrorMsg = "Your title is less than 5."
//         }
    
//         if (desc.length<5) {
//         assignErrorMsg = "Your description is less than 10"
//         }

//         if (title.length<5) {
//             titleErrorMsg = "Your title is less than 5."
//         }

//         if (title.length<5) {
//             titleErrorMsg = "Your title is less than 5."
//         }

    
//     window.prompt(`Please enter valid input. ${title}. ${assignee}`)
//         will make popup saying: 
//             Please enter valid input. Your title is less than 5. Your assignee less than 10.




// 3. submitButton.addEventListener("click", validateInput)