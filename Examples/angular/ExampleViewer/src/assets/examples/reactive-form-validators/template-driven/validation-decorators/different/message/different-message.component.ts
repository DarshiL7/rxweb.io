import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { AccountInfo } from './account-info.model';

@Component({
    selector: 'app-different-message-template-driven-validation-decorators',
    templateUrl: './different-message.component.html'
})
export class DifferentMessageTemplateDrivenValidationDecoratorsComponent implements OnInit {
    accountinfo: AccountInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.accountinfo= new AccountInfo()
    }
}
