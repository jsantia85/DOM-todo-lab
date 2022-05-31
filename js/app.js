/*----------------- Cached Element References -----------------*/
const input = document.querySelector("#input")
const submitBtn = document.querySelector("#submit-button")
const todoList = document.querySelector("#todo-list")

/*---------------------- Event Listeners ----------------------*/
submitBtn.addEventListener('click', function(evt) {
  if(input.value === '') return
  //creating new li element
  const newLiItem = document.createElement('li')
  // console.log(newLiItem)
  newLiItem.textContent = input.value
  // console.log(newLiItem)
  todoList.appendChild(newLiItem)
  input.value = ''
})


