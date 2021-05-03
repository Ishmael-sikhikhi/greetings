let nameElement = document.querySelector('.enteredName')
let greetingBtn = document.querySelector('.greetingsBtn')
let greetingsMessageElement = document.querySelector('.message')
var theCounter = document.querySelector(".counter")

let factoryInstance = greetingsFactory();
function greetings(){
    

    var checkedRadioBtn = document.querySelector("input[name='selectedLanguage']:checked");

    factoryInstance.setName(nameElement.value)
    
    if (checkedRadioBtn){
        var selectLanguage = checkedRadioBtn.value;  
        //alert('radio checked')    
        factoryInstance.setLanguage(selectLanguage);
    }
    
    greetingsMessageElement.innerHTML = factoryInstance.setLanguage(selectLanguage,nameElement.value);
    theCounter.innerHTML = factoryInstance.countNames();

}

greetingBtn.addEventListener('click', greetings);