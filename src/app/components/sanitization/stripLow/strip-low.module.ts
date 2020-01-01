import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { STRIP_LOW_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/stripLow/strip-low.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { STRIP_LOW_ROUTING } from "src/app/components/sanitization/stripLow/strip-low.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [STRIP_LOW_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: STRIP_LOW_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class StripLowModule { }



