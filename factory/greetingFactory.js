function greetingsFactory(){
    var theLanguage = ''
    var counter = 0;    
    var namesArray = []
    var greetName = {}
    const regex = /[a-zA-z]/
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
        if (theName.match(regex)){
        theName = theName.charAt(0).toUpperCase() + theName.slice(1)
        }
        else{
            return "Name must accommodate letters"
        }
        if(greetName[theName.trim()] == undefined && theName !='' && theName.match(regex)){
            
            greetName[theName.trim()] = 0;
            Number(counter++) 
        } 
        else {
            if(!greetName[theName.trim()] && theName !=''){
                greetName[theName.trim()]++ 
                             
            }            
        }
        if(!theName){
            return "Please enter name"
        }

        else if (!language){
            return 'Please select language'
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
        
    }
    function validate(name){
        let objectValidate = '("[A-Z][a-zA-Z]*")'
        return objectValidate.test(name);
    }

    function countNames(){
        return  counter
    }

    function greetingsMessage(){
        return setLanguage(language) + ', ' + getName();
    }

    function obj(){
        return greetName;
    }
    return{
        setName,
        getName,
        setLanguage,
        greetingsMessage,
        countNames,
        setLanguage,
        setObject,
        getObject,
        obj
    }
}