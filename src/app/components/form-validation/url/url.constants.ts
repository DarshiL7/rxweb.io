import { UrlCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/url/complete/url-complete.component";
import { UrlCompleteTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/url/complete/url-complete.component";
import { UrlCompleteTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/url/complete/url-complete.component";
import { UrlCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/url/complete/url-complete.component";
import { UrlConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/url/conditionalExpression/url-conditional-expression.component";
import { UrlConditionalExpressionTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/url/conditionalExpression/url-conditional-expression.component";
import { UrlConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/url/conditionalExpression/url-conditional-expression.component";
import { UrlConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/url/conditionalExpression/url-conditional-expression.component";
import { UrlMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/url/message/url-message.component";
import { UrlMessageTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/url/message/url-message.component";
import { UrlMessageTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/url/message/url-message.component";
import { UrlMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/url/message/url-message.component";
import { UrlMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/url/messageKey/url-message-key.component";
import { UrlMessageKeyTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/url/messageKey/url-message-key.component";
import { UrlMessageKeyTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/url/messageKey/url-message-key.component";
import { UrlMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/url/messageKey/url-message-key.component";
import { UrlDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/url/dynamic/url-dynamic.component";
import { UrlDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/url/dynamic/url-dynamic.component";
import { UrlAddComponent } from "src/assets/examples/reactive-form-validators/decorators/url/add/url-add.component";
import { UrlAddTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/url/add/url-add.component";
import { UrlAddTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/url/add/url-add.component";
import { UrlAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/url/add/url-add.component";
import { UrlEditComponent } from "src/assets/examples/reactive-form-validators/decorators/url/edit/url-edit.component";
import { UrlUrlValidationTypeComponent } from "src/assets/examples/reactive-form-validators/decorators/url/urlValidationType/url-url-validation-type.component";
import { UrlUrlValidationTypeTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/url/urlValidationType/url-url-validation-type.component";
import { UrlUrlValidationTypeTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/url/urlValidationType/url-url-validation-type.component";
import { UrlUrlValidationTypeValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/url/urlValidationType/url-url-validation-type.component";

export const URL_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : UrlCompleteComponent,
						conditionalExpression : UrlConditionalExpressionComponent,
						message : UrlMessageComponent,
						messageKey : UrlMessageKeyComponent,
						dynamic : UrlDynamicComponent,
						add : UrlAddComponent,
						edit : UrlEditComponent,
						urlValidationType:UrlUrlValidationTypeComponent
			  },
	template_driven_validation_directives:{
						complete : UrlCompleteTemplateDrivenValidationDirectivesComponent,
						conditionalExpression : UrlConditionalExpressionTemplateDrivenValidationDirectivesComponent,
						message : UrlMessageTemplateDrivenValidationDirectivesComponent,
						messageKey : UrlMessageKeyTemplateDrivenValidationDirectivesComponent,
						add : UrlAddTemplateDrivenValidationDirectivesComponent,
						urlValidationType:UrlUrlValidationTypeTemplateDrivenValidationDirectivesComponent
						
			  },
	template_driven_validation_decorators:{
						complete : UrlCompleteTemplateDrivenValidationDecoratorsComponent,
						conditionalExpression : UrlConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
						message : UrlMessageTemplateDrivenValidationDecoratorsComponent,
						messageKey : UrlMessageKeyTemplateDrivenValidationDecoratorsComponent,
						add : UrlAddTemplateDrivenValidationDecoratorsComponent,
						urlValidationType:UrlUrlValidationTypeTemplateDrivenValidationDecoratorsComponent
			  },
	validators:{
						complete : UrlCompleteValidatorComponent,
						conditionalExpression : UrlConditionalExpressionValidatorComponent,
						message : UrlMessageValidatorComponent,
						messageKey : UrlMessageKeyValidatorComponent,
						dynamic : UrlDynamicValidatorComponent,
						add : UrlAddValidatorComponent,
						urlValidationType:UrlUrlValidationTypeValidatorComponent
			  },
}