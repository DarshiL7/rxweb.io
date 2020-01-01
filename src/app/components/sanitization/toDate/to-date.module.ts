import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { TO_DATE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/toDate/to-date.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { TO_DATE_ROUTING } from "src/app/components/sanitization/toDate/to-date.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [TO_DATE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: TO_DATE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ToDateModule { }



