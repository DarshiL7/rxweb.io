import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTime-complete-validator',
    templateUrl: './max-time-complete.component.html'
})
export class MaxTimeCompleteValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            entryPlace:['',], 
            closingTime:['', RxwebValidators.maxTime({value:'23:30' })], 
            breakHours:['', RxwebValidators.maxTime({operator:'<'  ,value:'00:10' })], 
            totalInTime:['', RxwebValidators.maxTime({conditionalExpression:(x,y) => x.entryPlace == "Main Entry Gate"   ,value:'12:00' })], 
            entryTime:['', RxwebValidators.maxTime({conditionalExpression:'x => x.entryPlace == "Main Entry Gate"'  ,value:'11:00' })], 
            totalOutTime:['', RxwebValidators.maxTime({allowSeconds:true  ,value:'02:00:00' })], 
            exitTime:['', RxwebValidators.maxTime({message:'Please enter valid input'  ,fieldName:'closingTime' })], 
            netInTime:['', RxwebValidators.maxTime({messageKey:'maxTimeMessageKey'  ,fieldName:'totalInTime' })], 
        });
    }
}
