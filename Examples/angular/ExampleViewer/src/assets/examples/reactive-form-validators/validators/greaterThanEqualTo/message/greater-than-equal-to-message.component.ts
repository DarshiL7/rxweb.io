import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanEqualTo-message-validator',
    templateUrl: './greater-than-equal-to-message.component.html'
})
export class GreaterThanEqualToMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            admissionAge:['',], 
            otherAge:['', RxwebValidators.greaterThanEqualTo({fieldName:'admissionAge'  ,message:'Please enter number which is greater than or equal to above field input.' })], 
        });
    }
}
