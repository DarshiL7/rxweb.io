import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { RangeCompleteComponent } from './complete/range-complete.component';
import { RangeMinimumNumberComponent } from './minimumNumber/range-minimum-number.component';
import { RangeMaximumNumberComponent } from './maximumNumber/range-maximum-number.component';
import { RangeConditionalExpressionComponent } from './conditionalExpression/range-conditional-expression.component';
import { RangeMessageComponent } from './message/range-message.component';
import { RangeMessageKeyComponent } from './messageKey/range-message-key.component';
import { RangeDynamicComponent } from './dynamic/range-dynamic.component';
import { RangeAddComponent } from './add/range-add.component';
import { RangeEditComponent } from './edit/range-edit.component';
import { RangeAllowDecimalComponent } from './allowDecimal/range-allow-decimal.component';

@NgModule({
  declarations: [
	RangeCompleteComponent,
	RangeMinimumNumberComponent,
	RangeMaximumNumberComponent,
	RangeConditionalExpressionComponent,
	RangeMessageComponent,
	RangeMessageKeyComponent,
	RangeDynamicComponent,
	RangeAddComponent,
	RangeEditComponent,
	RangeAllowDecimalComponent
  ],
entryComponents: [
	RangeCompleteComponent,
	RangeMinimumNumberComponent,
	RangeMaximumNumberComponent,
	RangeConditionalExpressionComponent,
	RangeMessageComponent,
	RangeMessageKeyComponent,
	RangeDynamicComponent,
	RangeAddComponent,
	RangeEditComponent,
	RangeAllowDecimalComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	RangeCompleteComponent,
	RangeMinimumNumberComponent,
	RangeMaximumNumberComponent,
	RangeConditionalExpressionComponent,
	RangeMessageComponent,
	RangeMessageKeyComponent,
	RangeDynamicComponent,
	RangeAddComponent,
	RangeEditComponent,
	RangeAllowDecimalComponent
  ],

})
export class  RangeDecoratorsExtendedModule { }
