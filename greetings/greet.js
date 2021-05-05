let nameElement = document.querySelector('.enteredName')
let greetingBtn = document.querySelector('.greetingsBtn')
let greetingsMessageElement = document.querySelector('.message')
var theCounter = document.querySelector(".counter")

let factoryInstance = greetingsFactory()
function greetings(){
    

    var checkedRadioBtn = document.querySelector("input[name='selectedLanguage']:checked")
    // localStorage.
    let key = "name";
    
    if (checkedRadioBtn){
         var selectLanguage = checkedRadioBtn.value
        // factoryInstance.setName(nameElement.value) 
    //     factoryInstance.setLanguage(selectLanguage)
    }
    
    // factoryInstance.collectNames()

    greetingsMessageElement.innerHTML = factoryInstance.setLanguage(selectLanguage,nameElement.value)
    
    theCounter.innerHTML = factoryInstance.countNames()
    localStorage = JSON.stringify(setItem(key, factoryInstance.setObject(nameElement.value)))

}

greetingBtn.addEventListener('click', greetings)