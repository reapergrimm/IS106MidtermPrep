
class Login{

    constructor(){

    }

    login(){
        const usernameInput= document.getElementById('username');
        console.log('from login() usernameInput', usernameInput);
        const passwordInput= document.getElementById('password');
    
        let username= usernameInput.value;
        let password=vpasswordInput.value
        
        console.log('username', username);
        console.log('username', username);
    
        if(username) === 'admin' && password === 'abc123'){
            this.goToHome();
        }else {this.displayError()
        }
    }

displayError(){
    const errorBox = document.getElementById('error-box');
    errorBox.innerHTML = 'User not found';
    console.log('errorBox.innerHTML',
        errorBox.innerHTML
    );
    errorBox.style = "display; block;";
    const interval= setInterval(() => {
        errorBox.style = "display; none;"
        clearInterval(interval);
    }, 5000);
}

goToHome(){
    window.location.href = 'index.html';
}


}

const login = new Login();