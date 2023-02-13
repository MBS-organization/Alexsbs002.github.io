
//
//
//function register(){
//    if (document.getElementById("password").value == document.getElementById("confirm-password").value){
//
//        this.name = document.getElementById("name").value;
//        this.email = document.getElementById("email").value;;
//        this.password = document.getElementById("password").value;;
//
//        this.checkAviability = function(){
//            var mas=[this.name,this.email,this.password];
//            return mas;
//        }
//    }
//}

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function isEmailValid(value) {
    if (EMAIL_REGEXP.test(value)==true){
        return EMAIL_REGEXP.test(value);
    }
    
}

function allIsFul(pass,email,name){
    if(name !='' && email!='' && password!='')
        return true;
    
}

function register(name, email, password) {
 this.name = name;
 this.email = email;
 this.password = password;
    
    this.checkAvailability = function(){
            var mas=[this.name,this.email,this.password];
            console.log(mas);
            return mas;
        }  
}

function parceRegister(){
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("confirm-password").value
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    
    if((pass1 == pass2) && (allIsFul(password,email,name)==true) &&(password.length >=5)&&(isEmailValid(email)==true) ){
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            
            
            var userName = new register(name, email, password);
            console.log(userName);
            return userName;
            }
    else if((pass1 != pass2)) alert("Pass dont much!");
    else if((allIsFul(password,email,name)!=true)) alert("Fill poles!");
    else if((password.length<5)) alert("Pass must be more than 5 letters!");
    else if((isEmailValid(email)!=true)) alert("Email invalid!");
    }



//    
//var user = {
//        name : 0,
//        email : 0,
//        password :0,
//
//        checkAviability : function(){
//            var mas=[this.name,this.email,this.password];
//            console.log(mas);
//            return mas;
//        }  
//        }
//
//function register(){
//    var pass1 = document.getElementById("password").value;
//    var pass2 = document.getElementById("confirm-password").value
//    var name = document.getElementById("name").value;
//    var email = document.getElementById("email").value;
//    var password = document.getElementById("password").value;
//    
//    
//    if((pass1 == pass2) && (allIsFul(password,email,name)==true) &&(password.length >=5)&&(isEmailValid(email)==true) ){
//            user.name = document.getElementById("name").value;
//            user.email = document.getElementById("email").value;
//            user.password = document.getElementById("password").value;
//            user.checkAviability();
//            }
//    else if((pass1 != pass2)) alert("Pass dont much!");
//    else if((allIsFul(password,email,name)!=true)) alert("Fill poles!");
//    else if((password.length<5)) alert("Pass must be more than 5 letters!");
//    else if((isEmailValid(email)!=true)) alert("Email invalid!");
//    }

