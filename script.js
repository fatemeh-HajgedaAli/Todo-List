let $=document
let listMenu=$.querySelectorAll('.list')
let itemList=$.querySelector('.itemList')
let trashBox=$.querySelector('.trashBox')
let text=$.querySelector('.text')
let textInput=$.querySelector('#textInput')

listMenu.forEach(function(){
textInput.addEventListener('keydown',function(){  

textInputValue=textInput.value 

let newItemList=$.createElement('p');
newItemList.innerHTML=textInputValue
listMenu[0].appendChild(newItemList)
listMenu[0].style.display='inline'

})
})

