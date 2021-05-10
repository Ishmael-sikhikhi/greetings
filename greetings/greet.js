let nameElement = document.querySelector('.enteredName')
let greetingBtn = document.querySelector('.greetingsBtn')
let greetingsMessageElement = document.querySelector('.message')
var theCounter = document.querySelector(".counter")
let storedNames = document.querySelector(".storedNames")
var checkedRadioBtn = ''

let myLocal
if(localStorage['name']){
     myLocal = JSON.parse(localStorage.getItem('name'))
}



let factoryInstance = greetingsFactory(myLocal)
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
    
    // myObj=factoryInstance.obj()
    localStorage.setItem('name', JSON.stringify(factoryInstance.obj()))    
    theCounter.innerHTML = factoryInstance.countNames();
    storedNames.innerHTML = Object.keys(factoryInstance.obj())
}
function resetEle(){
    return nameElement.value = ''
    
}
theCounter.innerHTML = factoryInstance.countNames();
var clearSelectionBtn = 
 
greetingBtn.addEventListener('click', greetings)
