import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-allOf-matchValues-validator',
    templateUrl: './all-of-match-values.component.html'
})
export class AllOfMatchValuesValidatorComponent implements OnInit {
    employeeInfoFormGroup: FormGroup
    projectDomains: string[] = [];
    projectDomainsArray: string[] = ["ECommerce", "Banking", "Educational", "Gaming"];
  
    constructor(
      private formBuilder: RxFormBuilder, private http: HttpClient) { }
  
    ngOnInit() {
      this.employeeInfoFormGroup = this.formBuilder.group({
        department: [''],
        projectDomains: ['', RxwebValidators.allOf({ matchValues: ["ECommerce", "Banking"] })],
      });
    }
  
    addProjectDomain(element: any, index: number) {
      var indexOf = this.projectDomains.indexOf(element.value);
      element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf, 1);
      this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
    }
}
