let nameElement = document.querySelector('.enteredName')
let greetingBtn = document.querySelector('.greetingsBtn')
let greetingsMessageElement = document.querySelector('.message')
var theCounter = document.querySelector(".counter")

let factoryInstance = greetingsFactory()
function greetings(){
    var myObj = {}

    var checkedRadioBtn = document.querySelector("input[name='selectedLanguage']:checked")
    // localStorage.
        
    if (checkedRadioBtn){
         var selectLanguage = checkedRadioBtn.value
        // factoryInstance.setName(nameElement.value) 
    //     factoryInstance.setLanguage(selectLanguage)
    }
    
    // factoryInstance.collectNames()

    greetingsMessageElement.innerHTML = factoryInstance.setLanguage(selectLanguage,nameElement.value)
    
    theCounter.innerHTML = factoryInstance.countNames()
    myObj[factoryInstance.setLanguage(selectLanguage,nameElement.value)]
    console.log(myObj);
}



greetingBtn.addEventListener('click', greetings)