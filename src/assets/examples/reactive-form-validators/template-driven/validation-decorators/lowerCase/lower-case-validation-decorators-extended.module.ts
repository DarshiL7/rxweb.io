import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { LowerCaseCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/lower-case-complete.component';
import { LowerCaseConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from './conditionalExpression/lower-case-conditional-expression.component';
import { LowerCaseMessageTemplateDrivenValidationDecoratorsComponent } from './message/lower-case-message.component';
import { LowerCaseMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/lower-case-message-key.component';
import { LowerCaseAddTemplateDrivenValidationDecoratorsComponent } from './add/lower-case-add.component';

@NgModule({
  declarations: [
	LowerCaseCompleteTemplateDrivenValidationDecoratorsComponent,
	LowerCaseConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	LowerCaseMessageTemplateDrivenValidationDecoratorsComponent,
	LowerCaseMessageKeyTemplateDrivenValidationDecoratorsComponent,
	LowerCaseAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	LowerCaseCompleteTemplateDrivenValidationDecoratorsComponent,
	LowerCaseConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	LowerCaseMessageTemplateDrivenValidationDecoratorsComponent,
	LowerCaseMessageKeyTemplateDrivenValidationDecoratorsComponent,
	LowerCaseAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LowerCaseCompleteTemplateDrivenValidationDecoratorsComponent,
	LowerCaseConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
	LowerCaseMessageTemplateDrivenValidationDecoratorsComponent,
	LowerCaseMessageKeyTemplateDrivenValidationDecoratorsComponent,
	LowerCaseAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  LowerCaseTemplateDrivenValidationDecoratorsExtendedModule { }
