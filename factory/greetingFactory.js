function greetingsFactory(exist){
    var theLanguage = ''
    var counter = 0;    
    var namesArray = []
    var greetName = exist || {} 
    const regex = /[a-zA-z]/       
    
    function setLanguage(language,theName){
        //errors when information is not correct
        if(!language && !theName){
            return 'Please fill the required fields'
        }
        else if (theName.match(regex)){
        theName = theName.charAt(0).toUpperCase() + theName.slice(1)
        }
        else{
            return "Name must accommodate letters"
        }
        
        /* object fill or refill */ 

        if(greetName[theName.trim()] == undefined && theName !='' && theName.match(regex)){            
            greetName[theName.trim()] = 0            
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
            return 'Please re-enter the name and select language'
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
        return  Object.keys(greetName).length
    }

    function greetingsMessage(){
        return setLanguage(language) + ', ' + getName();
    }

    function obj(){
        return greetName 
    }
    return{
        setLanguage,
        greetingsMessage,
        countNames,
        setLanguage,
        obj
    }
}