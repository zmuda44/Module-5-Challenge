

const taskTitle = $("#task-title")
const dueDate = $("#datepicker")
const taskDescription = $("#task-description")
const modalSubmitBtn = $("#modal-submit")

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


// let tasks = JSON.parse(localStorage.getItem('tasks')) || []


// $("#datepicker").datepicker("show");

//Below was their code: but the other people put this inside a function
//they did the empty arrray with just one if (!projects)

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    taskList.push(task)
    localStorage.setItem('tasks', JSON.stringify(taskList)); 
    renderTaskList()   
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    
    
    
    //they set this equal to a function readProjectsFromStorage which the taskList and nextID should be in above)
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];


    //Clear any inputs that don't belong
    $("#todo-cards").append("")

    //Create card elements
    if (taskList == "") {
        return
    }
    
    else {
    for (const task of taskList) { 
        let cardContainer = $("<div>")
        cardContainer.addClass("card-container")
        $("#todo-cards").append(cardContainer).attr('data-project-id', project.id)   

        cardContainer.append(`<h1>${task.taskTitle}</h1>`)
        cardContainer.append(`<p>${task.dueDate}</p>`)
        cardContainer.append(`<button>Delete</button>`).attr('data-project-id', project.id) 
    }
    }
    
    //Delete task on click
    $(".card-container button").on('click', handleDeleteTask) 
}

    if (project.dueDate && project.status !== 'done') {
        const now = dayjs();
        const taskDueDate = dayjs(project.dueDate, 'DD/MM/YYYY');

// Todo: create a function to handle adding a new task
function handleAddTask(event){
  
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    console.log(this)
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
// $(document).ready(function () {
//     //Render the task list on page load
//     renderTaskList()
   

//     //Click Add Task button on page to show modal 
//     const displayModalBtn = $("[data-bs-toggle='modal']")  
//     displayModalBtn.on("click", function () {
//         $('#add-task-modal').modal('show')          
//     })

//     //Click Add Task button in modal to get values of input fields
//     modalSubmitBtn.on("click", function () {
//         //Get values of input fields
//         let task = {
//             taskTitle: taskTitle.val(),
//             dueDate: dueDate.val(),
//             taskDescription: taskDescription.val()
//         }       

//         //Set object to local storage
//         createTaskCard(task)
        
//         //Close modal
//         $('#add-task-modal').modal('hide') 
        
//         //Clear input fields
//         taskTitle.val("")
//         dueDate.val("")
//         taskDescription.val("")

//         //they just did a button click and called this function immediately
//     })

//     //Close modal with x button without submitting
//     $(".close").on("click", function () {
//         $('#add-task-modal').modal('hide')
//     })

//     //Make due date datepicker
//     $("#datepicker").datepicker({
//         changeMonth: true,
//         changeYear: true,
//     });
 
// });