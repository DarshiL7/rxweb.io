import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { AlphaNumericCompleteComponent } from './complete/alpha-numeric-complete.component';
import { AlphaNumericAllowWhiteSpaceComponent } from './allowWhiteSpace/alpha-numeric-allow-white-space.component';
import { AlphaNumericLocaleComponent } from './locale/alpha-numeric-locale.component';
import { AlphaNumericMessageComponent } from './message/alpha-numeric-message.component';
import { AlphaNumericConditionalExpressionComponent } from './conditionalExpression/alpha-numeric-conditional-expression.component';
import { AlphaNumericMessageKeyComponent } from './messageKey/alpha-numeric-message-key.component';
import { AlphaNumericDynamicComponent } from './dynamic/alpha-numeric-dynamic.component';
import { AlphaNumericAddComponent } from './add/alpha-numeric-add.component';
import { AlphaNumericEditComponent } from './edit/alpha-numeric-edit.component';

@NgModule({
  declarations: [
	AlphaNumericCompleteComponent,
	AlphaNumericAllowWhiteSpaceComponent,
	AlphaNumericLocaleComponent,
	AlphaNumericMessageComponent,
	AlphaNumericConditionalExpressionComponent,
	AlphaNumericMessageKeyComponent,
	AlphaNumericDynamicComponent,
	AlphaNumericAddComponent,
	AlphaNumericEditComponent,
  ],
entryComponents: [
	AlphaNumericCompleteComponent,
	AlphaNumericAllowWhiteSpaceComponent,
	AlphaNumericLocaleComponent,
	AlphaNumericMessageComponent,
	AlphaNumericConditionalExpressionComponent,
	AlphaNumericMessageKeyComponent,
	AlphaNumericDynamicComponent,
	AlphaNumericAddComponent,
	AlphaNumericEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	AlphaNumericCompleteComponent,
	AlphaNumericAllowWhiteSpaceComponent,
	AlphaNumericLocaleComponent,
	AlphaNumericMessageComponent,
	AlphaNumericConditionalExpressionComponent,
	AlphaNumericMessageKeyComponent,
	AlphaNumericDynamicComponent,
	AlphaNumericAddComponent,
	AlphaNumericEditComponent,
  ],

})
export class  AlphaNumericDecoratorsExtendedModule { }
