let $=document
let parentMenu=$.querySelector('ul')
let trashBox=$.querySelector('.trashBox')
let text=$.querySelector('.text')
let textInput=$.querySelector('#textInput')
let formBox=$.querySelector('.formBox')
// این تابع یک مقدار متنی (textInputValue) 
// دریافت می‌کند و از آن برای ایجاد یک آیتم جدید در لیست استفاده می‌کند.
function addNewTodo(textInputValue){
// make new li
let newChildList=$.createElement('li')
newChildList.className='itemList'
newChildList.innerHTML=textInputValue

// male new trashIcon
let newTrashIcon=$.createElement('i')
newTrashIcon.className='bi bi-trash-fill trashBox'

// event on trash box for removing
newTrashIcon.addEventListener('click',function(event){
event.target.parentElement.remove()
})
// appending element
newChildList.append(newTrashIcon);
parentMenu.append(newChildList);

}
// event for getting Input Value and make new to-do-list

textInput.addEventListener('keydown',function(event){  
let textInputValue=textInput.value.trim()
parentMenu.style.display='block'
if(textInputValue){
if(event.keyCode===13){
textInput.value=''
// تابع addNewTodo 
// با مقدار ورودی کاربر فراخوانی می‌شود تا آیتم جدید به لیست اضافه شود.
addNewTodo(textInputValue)
}
}
})

// submit and preventDefault
formBox.addEventListener('submit', function(event){
 event.preventDefault()
})

