import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { TRIM_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/trim/trim.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { TRIM_ROUTING } from "src/app/components/sanitization/trim/trim.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [TRIM_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: TRIM_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class TrimModule { }



