import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { MinNumberCompleteTemplateDrivenValidationDirectivesComponent } from './complete/min-number-complete.component';
import { MinNumberValueTemplateDrivenValidationDirectivesComponent } from './value/min-number-value.component';
import { MinNumberMessageTemplateDrivenValidationDirectivesComponent } from './message/min-number-message.component';
import { MinNumberConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/min-number-conditional-expression.component';
import { MinNumberMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/min-number-message-key.component';
import { MinNumberAddTemplateDrivenValidationDirectivesComponent } from './add/min-number-add.component';

@NgModule({
  declarations: [
	MinNumberCompleteTemplateDrivenValidationDirectivesComponent,
	MinNumberValueTemplateDrivenValidationDirectivesComponent,
	MinNumberMessageTemplateDrivenValidationDirectivesComponent,
	MinNumberConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinNumberMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinNumberAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	MinNumberCompleteTemplateDrivenValidationDirectivesComponent,
	MinNumberValueTemplateDrivenValidationDirectivesComponent,
	MinNumberMessageTemplateDrivenValidationDirectivesComponent,
	MinNumberConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinNumberMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinNumberAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	MinNumberCompleteTemplateDrivenValidationDirectivesComponent,
	MinNumberValueTemplateDrivenValidationDirectivesComponent,
	MinNumberMessageTemplateDrivenValidationDirectivesComponent,
	MinNumberConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	MinNumberMessageKeyTemplateDrivenValidationDirectivesComponent,
	MinNumberAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  MinNumberTemplateDrivenValidationDirectivesExtendedModule { }
