let $=document
let parentMenu=$.querySelector('ul')
let trashBox=$.querySelector('.trashBox')
let text=$.querySelector('.text')
let textInput=$.querySelector('#textInput')
let formBox=$.querySelector('.formBox')

function addNewTodo(textInputValue){

let newChildList=$.createElement('li')
newChildList.className='itemList'
newChildList.innerHTML=textInputValue

let newTrashIcon=$.createElement('i')
newTrashIcon.className='bi bi-trash-fill trashBox'

// event on trash box for removing
newTrashIcon.addEventListener('click',function(event){
event.target.parentElement.remove()
})

newChildList.append(newTrashIcon);
parentMenu.append(newChildList);

}
textInput.addEventListener('keydown',function(event){  

let textInputValue=textInput.value.trim()

parentMenu.style.marginTop='-0.2em'
parentMenu.style.display='block'
if(textInputValue){
if(event.keyCode===13){
textInput.value=''
addNewTodo(textInputValue)
}
}
})

// submit and preventDefault
formBox.addEventListener('submit', function(event){
    event.preventDefault()
})

