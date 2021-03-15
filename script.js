// let taskList = document.querySelector(".task-list")
// let save = document.querySelector(".save")
// let taskDescription = document.querySelector(".task-description")
// let taskPriority = document.querySelector(".task-priority")
// let taskAssign = document.querySelector(".task-assign")
// let taskForm = document.querySelector(".task-form")
//
// function getTasks(){
//     return JSON.parse(localStorage.getItem("tasks"))||[]
// }
//
// function saveTasks(event){
//     event.preventDefault()
//
//     let tasks = getTasks()
//     let newTask = {
//             id: +new Date(),
//             description: taskDescription.value,
//             isOpen: true,
//             assignedPerson: taskAssign.value,
//             status: taskPriority.value
//     }
//     localStorage.setItem("tasks",JSON.stringify([...tasks,newTask]))
//     taskForm.reset()
//
//         view()
// }
//
// save.addEventListener("click",(e)=>saveTasks(e))
//
// function view() {
//     // let tasks = [{
//     //     id: "ytre-43453-ytre-5433-gddsfv",
//     //     description: "Закончить верстку проекта",
//     //     isOpen: true,
//     //     assignedPerson: " Самарцев Игорь",
//     //     status: " Срочно"
//     //
//     // }]
//
//     let tasks = getTasks()
// taskList.innerHTML=""
//
//     tasks.forEach(task => {
// taskList.innerHTML+= ` <div class="bg-light p-3 mb-3"><h6>Номер задачи:${task.id}</h6>
//                    <span class="badge ${task.isOpen?"bg-primary":"bg-secondary"}">${task.isOpen?"открыто":"закрыто"}</span>
//                    <h3 class="my-4">${task.description}</h3>
//
//                    <div class="status"> <i class="far fa-clock"><span class="text-danger">${task.status}</span></i></div>
//                    <div class="assign mb-3"><i class="far fa-user-circle"><span >   ${task.assignedPerson}</span>
//                    </i></div>
//
//
//   <button type="button" class="btn close-todo ${task.isOpen ? 'btn-success':'btn-warning'}">   ${task.isOpen ? 'Закрыть' : 'Открыть'}</button>
//             <button type="button" class="btn btn-danger del-todo">Удалить</button>
//               </div>
//
// `
//         document.querySelectorAll(".del-todo").forEach((deleteBtn,index)=>{
//             deleteBtn.addEventListener("click",()=> {
//                 let tasks = getTasks().filter((el, idx) => {
//
//                     return idx !== index
//                 })
//                 localStorage.setItem("tasks", JSON.stringify(tasks))
//                 view()
//             })
//         })
//         document.querySelectorAll(".close-todo").forEach((closeBtn,index)=>{
//             closeBtn.addEventListener("click",()=> {
//
//                 let todo = getTasks().map((el, idx)=>{
//                     if(idx === index){
//                         return  {...el,isOpen:!el.isOpen}}
//                     {
//                         return el
//                     }
//                 })
//
//
//                 localStorage.setItem("tasks", JSON.stringify(todo))
//                 view()
//             })
//         })
//     })
// }
// let taskInput = document.querySelectorAll(".task-input")
//
//
// taskInput.forEach((el)=>{
//     el.addEventListener("keypress",(e)=>{
//         if(e.key === "Enter"){
//
//         }
//     })
// })







let taskList = document.querySelector(".task-list")
let save = document.querySelector(".save")
let taskDescription = document.querySelector(".task-description")
let taskPriority = document.querySelector(".task-priority")
let taskAssign = document.querySelector(".task-assign")
let taskForm = document.querySelector(".task-form")

function getTasks(){
    return JSON.parse(localStorage.getItem("tasks"))||[]
}

function saveTasks(event){
    event.preventDefault()

    let tasks = getTasks()
    let newTask = {
        id: +new Date(),
        description: taskDescription.value,
        isOpen: true,
        assignedPerson: taskAssign.value,
        status: taskPriority.value
    }
    localStorage.setItem("tasks",JSON.stringify([...tasks,newTask]))
    taskForm.reset()

    view()
}

save.addEventListener("submit",(e)=>saveTasks(e))

function view() {
    // let tasks = [{
    //     id: "ytre-43453-ytre-5433-gddsfv",
    //     description: "Закончить верстку проекта",
    //     isOpen: true,
    //     assignedPerson: " Самарцев Игорь",
    //     status: " Срочно"
    //
    // }]

    let tasks = getTasks()
    taskList.innerHTML=""

    tasks.forEach(task => {
        taskList.innerHTML+= ` <div class="bg-light p-3 mb-3"><h6>Номер задачи:${task.id}</h6>
                   <span class="badge ${task.isOpen?"bg-primary":"bg-secondary"}">${task.isOpen?"открыто":"закрыто"}</span>
                   <h3 class="my-4">${task.description}</h3>

                   <div class="status"> <i class="far fa-clock"><span class="text-danger">${task.status}</span></i></div>
                   <div class="assign mb-3"><i class="far fa-user-circle"><span >   ${task.assignedPerson}</span>
                   </i></div>
              
             
  <button type="button" class="btn close-todo ${task.isOpen ? 'btn-success':'btn-warning'}">   ${task.isOpen ? 'Закрыть' : 'Открыть'}</button>
            <button type="button" class="btn btn-danger del-todo">Удалить</button>
              </div>
              
`
        document.querySelectorAll(".del-todo").forEach((deleteBtn,index)=>{
            deleteBtn.addEventListener("click",()=> {
                let tasks = getTasks().filter((el, idx) => {

                    return idx !== index
                })
                localStorage.setItem("tasks", JSON.stringify(tasks))
                view()
            })
        })
        document.querySelectorAll(".close-todo").forEach((closeBtn,index)=>{
            closeBtn.addEventListener("click",()=> {

                let todo = getTasks().map((el, idx)=>{
                    if(idx === index){
                        return  {...el,isOpen:!el.isOpen}}
                    {
                        return el
                    }
                })


                localStorage.setItem("tasks", JSON.stringify(todo))
                view()
            })
        })
    })
}
let taskInput = document.querySelectorAll(".task-input")


taskInput.forEach((el)=>{
    el.addEventListener("keypress",(e)=>{
        if(e.key === "Enter"){
            return false
        }
    })
})

// function test(e){
//     if(e.key === "Enter"){
//         return false
//     }
// }

