function greetingsFactory(){
    var theLanguage = ''
    var counter = 0;    
    var namesArray = []
    var greetName = {} 
      
    const digits = /[0-9]/    
    
    function setLanguage(language,theName){
        //errors when information is not correct
        if(!language && !theName){
            return 'Please enter the name and select language' 
        }
        else if (language && !theName.match(digits)){
        theName = theName.charAt(0).toUpperCase() + theName.slice(1).toLowerCase()
        }
        
        /* object fill or refill */ 

        if(greetName[theName.trim()] == undefined && theName !='' && !theName.match(digits)){            
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