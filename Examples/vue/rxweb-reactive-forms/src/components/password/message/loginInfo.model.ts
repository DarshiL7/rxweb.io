import {  password, } from   "@rxweb/reactive-forms"   

export class LoginInfo {

	@password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:'Password is not valid' }) 
	oldPassword: string;
	
	
}
