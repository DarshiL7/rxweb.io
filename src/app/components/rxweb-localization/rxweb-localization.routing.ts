import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizationGettingStartedComponent } from './getting-started/getting-started.component';



const RXWEB_LOCALIZATION_ROUTES: Routes = [
    {
        path: "localization-getting-started",
        component: LocalizationGettingStartedComponent
    },
    {
        path: 'localization',
        loadChildren: () => import('src/app/components/localization/localization.module').then(m => m.LocalizationModule),
    }

];
export const RXWEB_LOCALIZATION_ROUTING = RouterModule.forChild(RXWEB_LOCALIZATION_ROUTES);
