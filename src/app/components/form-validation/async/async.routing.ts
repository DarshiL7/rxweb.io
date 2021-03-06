import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const ASYNC_ROUTES: Routes = [
// {
// 	path:':typeName/:templateDrivenType',
// 	component:PageComponent
// },
// {
// 	path:':typeName',
// 	component:PageComponent
// },
{
	path:"decorators",
	component:PageComponent
},
{
	path:"template-driven/directives",
	component:PageComponent
}


];
export const ASYNC_ROUTING = RouterModule.forChild(ASYNC_ROUTES);
