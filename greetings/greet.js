let nameElement = document.querySelector('.enteredName')
let greetingBtn = document.querySelector('.greetingsBtn')
let resettingBtn = document.querySelector('.resettingBtn')
let greetingsMessageElement = document.querySelector('.message')
var theCounter = document.querySelector(".counter")
let storedNames = document.querySelector(".storedNames")
var checkedRadioBtn = ''
const regex = /[a-zA-z]/ 
let myLocal
if(localStorage['name']){
     myLocal = JSON.parse(localStorage.getItem('name'))
}



let factoryInstance = greetingsFactory(myLocal)
var selectLanguage = ''
var myObj = {}

function greetings(){
    let name = nameElement.value;
    checkedRadioBtn = document.querySelector("input[name='selectedLanguage']:checked")
   
    if (checkedRadioBtn){
         selectLanguage = checkedRadioBtn.value
         
    } 
    if(name.match(regex) && selectLanguage){
        greetingsMessageElement.innerHTML = factoryInstance.setLanguage(selectLanguage,name)   
        resetEle()
        objectFill()
        document.getElementById("r").checked = false;
        document.getElementById("r1").checked = false; 
        document.getElementById("r2").checked = false;  
    }
    else{
        if(!name.match(regex) && (selectLanguage || !selectLanguage)){
            setTimeout(function(){
                greetingsMessageElement.innerHTML = 'Error! Name should be in alphabets'
                greetingsMessageElement.classList.add('error')
                
            },0)
            setTimeout(function(){
                greetingsMessageElement.innerHTML = ''
                greetingsMessageElement.classList.remove('error')
                
            },1000)
        }
        
    }





    
}


function objectFill(){   
    
    // myObj=factoryInstance.obj()
    localStorage.setItem('name', JSON.stringify(factoryInstance.obj()))    
    theCounter.innerHTML = factoryInstance.countNames();
    storedNames.innerHTML = "Greated names: "+Object.keys(factoryInstance.obj())
}
function resetEle(){
    return nameElement.value = ''    
}
function resetting(){
    localStorage.clear()	
    location.reload()
} 
theCounter.innerHTML = factoryInstance.countNames();
var clearSelectionBtn = 
 
greetingBtn.addEventListener('click', greetings)
resettingBtn.addEventListener('click', resetting)