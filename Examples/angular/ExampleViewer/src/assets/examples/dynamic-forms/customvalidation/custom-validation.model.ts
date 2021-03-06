import { FormControlConfig } from "@rxweb/reactive-dynamic-forms";
import { AbstractControl } from "@angular/forms"
export class NonAsyncCustomValidation extends FormControlConfig {

    validator = (control: AbstractControl) => {
        return control.value == "India" ? null : {
            custom: { message: 'Indian Nationality Required' }
        }
    }

}