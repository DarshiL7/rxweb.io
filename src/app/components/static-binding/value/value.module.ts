import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { VALUE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/static-binding/value/value.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { VALUE_ROUTING } from "src/app/components/static-binding/value/value.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [VALUE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: VALUE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ValueModule { }



