import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeInfo } from './employee-info.model';

@Component({
  selector: 'app-allOf-messageKey',
  templateUrl: './all-of-message-key.component.html'
})
export class AllOfMessageKeyComponent implements OnInit {
  employeeInfoFormGroup: FormGroup
  languages: string[] = [];

  constructor(
    private formBuilder: RxFormBuilder, private http: HttpClient) { }

  languagesArray: string[] = ["English", "Spanish", "French", "German", "Chinese"];

  ngOnInit() {
    let employeeInfo = new EmployeeInfo();
    this.employeeInfoFormGroup = this.formBuilder.formGroup(employeeInfo);
  }

  addLanguage(element: any) {
    var indexOf = this.languages.indexOf(element.value);
    element.checked ? this.languages.push(element.value) : this.languages.splice(indexOf, 1);
    this.employeeInfoFormGroup.controls.languages.setValue(this.languages);
  }
}
