import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { PLACEHOLDER_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/static-binding/placeholder/placeholder.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { PLACEHOLDER_ROUTING } from "src/app/components/static-binding/placeholder/placeholder.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [PLACEHOLDER_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: PLACEHOLDER_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PlaceholderModule { }



