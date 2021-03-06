import { CheckboxCompleteComponent } from 'src/assets/examples/controls/checkbox/complete/checkbox-complete.component';
import { CheckboxInlineComponent } from 'src/assets/examples/controls/checkbox/inline/checkbox-inline.component';
import { CheckboxValueComponent } from 'src/assets/examples/controls/checkbox/value/checkbox-value.component';
import { CheckboxSingleComponent } from 'src/assets/examples/controls/checkbox/single/checkbox-single.component';
import { CheckboxMultiselectComponent } from 'src/assets/examples/controls/checkbox/multiselect/checkbox-multiselect.component';
import { CheckboxSelectallComponent } from 'src/assets/examples/controls/checkbox/selectall/checkbox-selectall.component';

export const CHECKBOX_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
    validators: {
        complete: CheckboxCompleteComponent,
        inline: CheckboxInlineComponent,
        value: CheckboxValueComponent,
        single: CheckboxSingleComponent,
        multiselect: CheckboxMultiselectComponent,
        selectall: CheckboxSelectallComponent
    }

}