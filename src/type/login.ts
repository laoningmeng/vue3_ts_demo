export class LoginForm{
    public username:string;
    public password:string;

    constructor(username:string="",passowrd:string="",password:string=""){
        this.username = username;
        this.password = passowrd;
    }
}
