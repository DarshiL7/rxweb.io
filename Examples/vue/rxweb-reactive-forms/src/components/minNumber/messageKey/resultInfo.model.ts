import {  minNumber, } from   "@rxweb/reactive-forms"   

export class ResultInfo {

	@minNumber({value:35  ,messageKey:'minNumberMessageKey' }) 
	economics: number;
	
	
}
