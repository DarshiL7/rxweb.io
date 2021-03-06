import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { POST_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/http/post/post.constants";
import { PostValidatorsExtendedModule } from "src/assets/examples/http/post/post-validators-extended.module";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { POST_ROUTING } from "src/app/components/http/post/post.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [POST_ROUTING ,PostValidatorsExtendedModule,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: POST_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class PostModule { }



