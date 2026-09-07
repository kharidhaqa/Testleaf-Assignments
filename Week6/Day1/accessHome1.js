"use strict";
class loginTest {
    browserName = "Chrome";
    password = "admin123";
    userName = "tester";
    openApplication() {
        console.log(`Application is opened in ${this.browserName}`);
    }
    login() {
        console.log(`Username entered is ${this.userName}`);
        console.log(`Password entered is ${this.password}`);
    }
}
const signin = new loginTest();
signin.openApplication();
signin.login();
//console.log('username is '+signin.userName) 
//console.log('username is '+signin.password)
