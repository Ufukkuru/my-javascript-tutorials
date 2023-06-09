//form exercise 
let userFormDom = document.querySelector("#userForm")
userFormDom.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')


const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

      if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = "" 
        SCORE.value = ""
    } else {
        alertDOM.innerHTML = alertFunction(
            "Header Informations",
            "You entered incomplete information",
            "Success"
        )
    }
    
}


let userListDom = document.querySelector("#userList")

const addItem = (userName, score) => {
    let liDom = document.createElement('li')
    liDom.innerHTML = `${userName} <span class="badge bg-dark">${score}</span>`
    liDom.classList.add('list-group-item','d-flex' ,'justify-content-between' , 'align-items-center')
    userListDom.append(liDom)
}

