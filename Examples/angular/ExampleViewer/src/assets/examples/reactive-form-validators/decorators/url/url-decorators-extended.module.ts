import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { UrlCompleteComponent } from './complete/url-complete.component';
import { UrlConditionalExpressionComponent } from './conditionalExpression/url-conditional-expression.component';
import { UrlMessageComponent } from './message/url-message.component';
import { UrlUrlValidationTypeComponent } from './urlValidationType/url-url-validation-type.component';
import { UrlMessageKeyComponent } from './messageKey/url-message-key.component';
import { UrlDynamicComponent } from './dynamic/url-dynamic.component';
import { UrlAddComponent } from './add/url-add.component';
import { UrlEditComponent } from './edit/url-edit.component';

@NgModule({
  declarations: [
	UrlCompleteComponent,
	UrlConditionalExpressionComponent,
	UrlMessageComponent,
	UrlUrlValidationTypeComponent,
	UrlMessageKeyComponent,
	UrlDynamicComponent,
	UrlAddComponent,
	UrlEditComponent,
  ],
entryComponents: [
	UrlCompleteComponent,
	UrlConditionalExpressionComponent,
	UrlMessageComponent,
	UrlUrlValidationTypeComponent,
	UrlMessageKeyComponent,
	UrlDynamicComponent,
	UrlAddComponent,
	UrlEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	UrlCompleteComponent,
	UrlConditionalExpressionComponent,
	UrlMessageComponent,
	UrlUrlValidationTypeComponent,
	UrlMessageKeyComponent,
	UrlDynamicComponent,
	UrlAddComponent,
	UrlEditComponent,
  ],

})
export class  UrlDecoratorsExtendedModule { }
