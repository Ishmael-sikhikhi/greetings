function greetingsFactory(){
    var theLanguage = ''
    var counter = 0;
    
    var namesArray = []
    var greetName = {}
    function setName(name){
        if (!namesArray.includes(name)) {
            return namesArray.push(name)
        } else {
            return;
        }
    }
    function getName(){
        return namesArray
    }
    
    function setObject(name){
        greetName = name
    }
    function getObject(){
        greetName
    }

   

    function setLanguage(language,theName){
        
        if(greetName[theName.trim()] == undefined && theName !=''){
            greetName[theName.trim()] = 0;
            Number(counter++) 
        }
        else {
            if(!greetName[theName.trim()]){
                greetName[theName.trim()]++ 
                             
            }            
        }


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
        return  counter
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
        setObject,
        getObject
    }
}