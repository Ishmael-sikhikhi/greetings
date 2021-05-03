function greetingsFactory(){
    var theLanguage = ''
    var counter = 0;
    function setName(name){
        theName = name
    }
    function getName(){
        return theName
    }
    function setLanguage(language){
       theLanguage = language
    }

    function getLanguage(){
        return theLanguage
    }

    function setLanguage(language,theName){
        if(language === 'english' && theName !== ''){
            return 'Hello'+', '+theName    
        }
        else if(language === 'afrikaans' && theName !== ''){
            return 'Hallo'+', '+theName
        }
        else if(language === 'setswana' && theName !== ''){
            return 'Dumela'+', '+theName
        }
        else if (language === 'english' | language === 'afrikaans' | language === 'setswana' && theName === ''){
            return 'You have not entered the name'
        }
        else {
            return 'Please select language'
        }
        
    }

    function countNames(){
        if(getName() != ''){
            return ++counter
        }
        else{
            return counter
        }
    }

    function greetingsMessage(){
        return setLanguage(language) + ', ' + getName();
    }

    return{
        setName,
        getName,
        setLanguage,
        greetingsMessage,
        countNames,
        setLanguage,
        getLanguage
    }
}