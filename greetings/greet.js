let nameElement = document.querySelector('.enteredName')
let greetingBtn = document.querySelector('.greetingsBtn')
let greetingsMessageElement = document.querySelector('.message')
var theCounter = document.querySelector(".counter")
let storedNames = document.querySelector(".storage")
var checkedRadioBtn = ''
let factoryInstance = greetingsFactory()
var selectLanguage = ''
var myObj = {}

function greetings(){
    
    checkedRadioBtn = document.querySelector("input[name='selectedLanguage']:checked")
   
    if (checkedRadioBtn){
         selectLanguage = checkedRadioBtn.value
       
    } 

   greetingsMessageElement.innerHTML = factoryInstance.setLanguage(selectLanguage,nameElement.value)
    objectFill()
    
    resetEle()   
    
    
}


function objectFill(){   
    let key = 'name' 
    myObj=factoryInstance.obj()
    localStorage.setItem('name', JSON.stringify(myObj));
    let myStorage = JSON.parse(localStorage['name']);
    localStorage.getItem('name', myStorage)
    theCounter.innerHTML = Object.keys(myStorage).length
    storedNames.innerHTML = Object.keys(myStorage)
    
    return myStorage    
}
function resetEle(){
    return nameElement.value = ''
    
}
var clearSelectionBtn = 
 
greetingBtn.addEventListener('click', greetings)