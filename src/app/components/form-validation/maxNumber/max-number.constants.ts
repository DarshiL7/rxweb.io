import { MaxNumberCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumber/complete/max-number-complete.component";
import { MaxNumberCompleteTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxNumber/complete/max-number-complete.component";
import { MaxNumberCompleteTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxNumber/complete/max-number-complete.component";
import { MaxNumberCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumber/complete/max-number-complete.component";
import { MaxNumberValueComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumber/value/max-number-value.component";
import { MaxNumberValueTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxNumber/value/max-number-value.component";
import { MaxNumberValueTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxNumber/value/max-number-value.component";
import { MaxNumberValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumber/value/max-number-value.component";
import { MaxNumberConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumber/conditionalExpression/max-number-conditional-expression.component";
import { MaxNumberConditionalExpressionTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxNumber/conditionalExpression/max-number-conditional-expression.component";
import { MaxNumberConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxNumber/conditionalExpression/max-number-conditional-expression.component";
import { MaxNumberConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumber/conditionalExpression/max-number-conditional-expression.component";
import { MaxNumberMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumber/message/max-number-message.component";
import { MaxNumberMessageTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxNumber/message/max-number-message.component";
import { MaxNumberMessageTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxNumber/message/max-number-message.component";
import { MaxNumberMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumber/message/max-number-message.component";
import { MaxNumberMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumber/messageKey/max-number-message-key.component";
import { MaxNumberMessageKeyTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxNumber/messageKey/max-number-message-key.component";
import { MaxNumberMessageKeyTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxNumber/messageKey/max-number-message-key.component";
import { MaxNumberMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumber/messageKey/max-number-message-key.component";
import { MaxNumberDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumber/dynamic/max-number-dynamic.component";
import { MaxNumberDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumber/dynamic/max-number-dynamic.component";
import { MaxNumberAddComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumber/add/max-number-add.component";
import { MaxNumberAddTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/maxNumber/add/max-number-add.component";
import { MaxNumberAddTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/maxNumber/add/max-number-add.component";
import { MaxNumberAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/maxNumber/add/max-number-add.component";
import { MaxNumberEditComponent } from "src/assets/examples/reactive-form-validators/decorators/maxNumber/edit/max-number-edit.component";

export const MAX_NUMBER_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MaxNumberCompleteComponent,
						value : MaxNumberValueComponent,
						conditionalExpression : MaxNumberConditionalExpressionComponent,
						message : MaxNumberMessageComponent,
						messageKey : MaxNumberMessageKeyComponent,
						dynamic : MaxNumberDynamicComponent,
						add : MaxNumberAddComponent,
						edit : MaxNumberEditComponent,
			  },
	template_driven_validation_directives:{
						complete : MaxNumberCompleteTemplateDrivenValidationDirectivesComponent,
						value : MaxNumberValueTemplateDrivenValidationDirectivesComponent,
						conditionalExpression : MaxNumberConditionalExpressionTemplateDrivenValidationDirectivesComponent,
						message : MaxNumberMessageTemplateDrivenValidationDirectivesComponent,
						messageKey : MaxNumberMessageKeyTemplateDrivenValidationDirectivesComponent,
						add : MaxNumberAddTemplateDrivenValidationDirectivesComponent,
			  },
	template_driven_validation_decorators:{
						complete : MaxNumberCompleteTemplateDrivenValidationDecoratorsComponent,
						value : MaxNumberValueTemplateDrivenValidationDecoratorsComponent,
						conditionalExpression : MaxNumberConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
						message : MaxNumberMessageTemplateDrivenValidationDecoratorsComponent,
						messageKey : MaxNumberMessageKeyTemplateDrivenValidationDecoratorsComponent,
						add : MaxNumberAddTemplateDrivenValidationDecoratorsComponent,
			  },
	validators:{
						complete : MaxNumberCompleteValidatorComponent,
						value : MaxNumberValueValidatorComponent,
						conditionalExpression : MaxNumberConditionalExpressionValidatorComponent,
						message : MaxNumberMessageValidatorComponent,
						messageKey : MaxNumberMessageKeyValidatorComponent,
						dynamic : MaxNumberDynamicValidatorComponent,
						add : MaxNumberAddValidatorComponent,
			  },
}