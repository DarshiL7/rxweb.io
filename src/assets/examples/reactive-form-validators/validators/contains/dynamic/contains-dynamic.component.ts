import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-contains-dynamic-validator',
    templateUrl: './contains-dynamic.component.html'
})
export class ContainsDynamicValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('assets/examples/reactive-form-validators/validators/contains/dynamic/dynamic.json?v='+environment.appVersion).subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var user = { emailAddress:'', businessEmailAddress:'', recoveryEmailAddress:'', otherEmailAddress:'', organizationEmailAddress:'',  }
			this.userFormGroup = this.formBuilder.group(user,formBuilderConfiguration);
		})
    }
}
