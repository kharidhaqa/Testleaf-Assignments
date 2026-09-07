class loginTest{
    public browserName = "Chrome"
    private password = "admin123"
    protected userName = "tester"

    public openApplication(){
        console.log(`Application is opened in ${this.browserName}`)
    }

    public login(){
        console.log(`Username entered is ${this.userName}`)
        console.log(`Password entered is ${this.password}`)
    }
}
const signin = new loginTest()
signin.openApplication()
signin.login()
//console.log('username is '+signin.userName) 
//console.log('username is '+signin.password)