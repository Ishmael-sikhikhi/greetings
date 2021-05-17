let nameElement = document.querySelector('.enteredName')
let greetingBtn = document.querySelector('.greetingsBtn')
let resettingBtn = document.querySelector('.resettingBtn')
let greetingsMessageElement = document.querySelector('.message')
var theCounter = document.querySelector(".counter")
let storedNames = document.querySelector(".storedNames")
var checkedRadioBtn = ''

const digits = /[0-9]/ 
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
    if(!name.match(digits) && selectLanguage){
        greetingsMessageElement.innerHTML = factoryInstance.setLanguage(selectLanguage,name)   
        resetEle()
        uncheckRadioBtn()
        objectFill()
        
    }
    else{
        if((selectLanguage || !selectLanguage) && name != '' && name.match(digits)){
            setTimeout(() =>{
                greetingsMessageElement.innerHTML = 'Error! Name should be in alphabets'
                greetingsMessageElement.classList.add('error')
                uncheckRadioBtn()
                resetEle() 
            },0)
            setTimeout(() =>{
                greetingsMessageElement.innerHTML = ''
                greetingsMessageElement.classList.remove('error')
                uncheckRadioBtn()                
                             
            },3000)
            
        }
        else if (!name && !selectLanguage){
            setTimeout(() =>{
                greetingsMessageElement.innerHTML = 'Error! No name and language is not selected!'
                greetingsMessageElement.classList.add('error')  
                uncheckRadioBtn()
                resetEle()               
            },0)
            setTimeout(() =>{
                greetingsMessageElement.innerHTML = ''
                greetingsMessageElement.classList.remove('error')                             
            },4000)
            
        }
        else if (!name && selectLanguage){
            setTimeout(() =>{
                greetingsMessageElement.innerHTML = 'Error! Name no entered!'
                greetingsMessageElement.classList.add('error') 
                uncheckRadioBtn() 
                resetEle()               
            },0)
            setTimeout(() =>{
                greetingsMessageElement.innerHTML = ''
                greetingsMessageElement.classList.remove('error')                             
            },3000)
            
        }
        else if (name && !selectLanguage){
            setTimeout(() =>{
                greetingsMessageElement.innerHTML = 'Error! Language is not selected!'
                greetingsMessageElement.classList.add('error')  
                uncheckRadioBtn()   
                resetEle()            
            },0)
            setTimeout(() =>{
                greetingsMessageElement.innerHTML = ''
                greetingsMessageElement.classList.remove('error')                             
            },3000)
            
        }
        else
            return   
    }  
}

function uncheckRadioBtn(){
    document.getElementById("r").checked = false;
    document.getElementById("r1").checked = false; 
    document.getElementById("r2").checked = false; 
    selectLanguage = null
}


function objectFill(){   
    
    // myObj=factoryInstance.obj()
    localStorage.setItem('name', JSON.stringify(factoryInstance.obj()))    
    theCounter.innerHTML = factoryInstance.countNames();
    var storeVar = Object.keys(factoryInstance.obj())
    var stores
    for(var i = 0; i < storeVar.length; i++){
        stores =  storeVar;
    }
}
function resetEle(){
    return nameElement.value = ''    
}
function resetting(){
    localStorage.clear()	
    location.reload()
    setTimeout(() =>{
        greetingsMessageElement.innerHTML = 'Application has been successfully resetted!'
        greetingsMessageElement.classList.add('good')                
    },0)
    setTimeout(() =>{
        greetingsMessageElement.innerHTML = 'Good'
        greetingsMessageElement.classList.add('good')                             
    },100)
} 
theCounter.innerHTML = factoryInstance.countNames();

 
greetingBtn.addEventListener('click', greetings)
resettingBtn.addEventListener('click', resetting)