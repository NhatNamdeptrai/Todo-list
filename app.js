
// lay du lieu o input 
const todoInput = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const todoListHTML = document.getElementById('todo-list') 

// Lay danh sach todo tu localstorage va chuyen thanh du lieu cua js
//  neu khong co todo-list truoc do thi gan bang mang rong ( [] )
let todoList = JSON.parse(localStorage.getItem('todo-list')) || []

// lay du lieu va luu vao trong localStorage
function addTodo() {
    let text = todoInput.value 
    todoList.push(text)
    
    localStorage.setItem('todo-list', JSON.stringify(todoList))
    renderHTML()

}

// ham in ra danh sach todo 
function renderHTML() {
    let html = ''; 
    for(let i = 0; i < todoList.length; i++){
        html += ('<li>' + todoList[i] + '</li>')
    }

    //  inner cac phan tu HTML da them trong vong lap vao the ul```
    todoListHTML.innerHTML = html
}

//  them su kien click cho nut button
addBtn.addEventListener('click', function(event){
    event.preventDefault()
    console.log('click')

    // goi ham 
    addTodo()
})

// goi ham in ra danh sach todo
renderHTML()



todoListHTML.innerHTML = "<h1>Render here</h1>"