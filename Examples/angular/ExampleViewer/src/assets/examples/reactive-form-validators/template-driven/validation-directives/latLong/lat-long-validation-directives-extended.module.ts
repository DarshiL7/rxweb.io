import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { LatLongCompleteTemplateDrivenValidationDirectivesComponent } from './complete/lat-long-complete.component';
import { LatLongConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/lat-long-conditional-expression.component';
import { LatLongMessageTemplateDrivenValidationDirectivesComponent } from './message/lat-long-message.component';
import { LatLongMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/lat-long-message-key.component';
import { LatLongAddTemplateDrivenValidationDirectivesComponent } from './add/lat-long-add.component';

@NgModule({
  declarations: [
	LatLongCompleteTemplateDrivenValidationDirectivesComponent,
	LatLongConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LatLongMessageTemplateDrivenValidationDirectivesComponent,
	LatLongMessageKeyTemplateDrivenValidationDirectivesComponent,
	LatLongAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	LatLongCompleteTemplateDrivenValidationDirectivesComponent,
	LatLongConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LatLongMessageTemplateDrivenValidationDirectivesComponent,
	LatLongMessageKeyTemplateDrivenValidationDirectivesComponent,
	LatLongAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	LatLongCompleteTemplateDrivenValidationDirectivesComponent,
	LatLongConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	LatLongMessageTemplateDrivenValidationDirectivesComponent,
	LatLongMessageKeyTemplateDrivenValidationDirectivesComponent,
	LatLongAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  LatLongTemplateDrivenValidationDirectivesExtendedModule { }
