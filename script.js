let $=document

let itemList=$.querySelector('.itemList')
let trashBox=$.querySelector('.trashBox')
let text=$.querySelector('.text')
let listMenu=$.querySelectorAll('.listMenu')
let textInput=$.querySelector('#textInput')
let formBox=$.querySelector('.formBox')


function addNewTodo(){

let newItemList=$.createElement('li')
newItemList.className='itemList'

let newText=$.createElement('p')
newText.innerHTML=textInputValue

let newTrashIcon=$.createElement('i')
newTrashIcon.className='bi bi-trash3-fill trashBox'

newTrashIcon.addEventListener('click',function(event){
event.target.parentElement.remove()

newItemList.append(newText , newTrashIcon)
listMenu[0].append(newItemList)
})
}
formBox.addEventListener('submit', function(event){
    event.preventDefault()
})
textInput.addEventListener('keydown',function(event){  

textInputValue=textInput.value.trim()
listMenu[0].style.marginTop='-0.2'
listMenu[0].style.display='inline'

if(event.keyCode === 13 ){
    if(textInputValue){
textInput.value=''
addNewTodo(textInputValue)

}
}
})


