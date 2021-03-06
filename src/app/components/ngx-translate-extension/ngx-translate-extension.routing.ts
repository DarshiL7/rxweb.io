import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissingTranslationHandlerComponent } from './spec-comparison/missing-translation-handler/missing-translation-handler.component';
import { TranslateCompilerComponent } from './spec-comparison/translate-compiler/translate-compiler.component';
import { TranslateDirectiveComponent } from './spec-comparison/translate-directive/translate-directive.component';
import { TranslateLoaderComponent } from './spec-comparison/translate-loader/translate-loader.component';
import { TranslateParserComponent } from './spec-comparison/translate-parser/translate-parser.component';
import { TranslatePipeComponent } from './spec-comparison/translate-pipe/translate-pipe.component';
import { TranslateServiceComponent } from './spec-comparison/translate-service/translate-service.component';
import { TranslateStoreComponent } from './spec-comparison/translate-store/translate-store.component';
import { NgxTranslateExtensionGettingStartedComponent } from './getting-started/getting-started.component';
import { PowerhouseAttributeDirectiveComponent } from './powerhouse/attribute-directive/attribute-directive.component';
import { PowerhousePipeComponent } from './powerhouse/pipe/pipe.component';
import { PowerhouseStructuralDirectiveComponent } from './powerhouse/structural-directive/structural-directive.component';
import { PowerhouseDecoratorComponent } from './powerhouse/decorator/decorator.component';
import { PowerhouseValidationMessageComponent } from './powerhouse/validation-message/validation-message.component';
import { ConfidenceComponent } from './confidence/confidence.component';
import { ChangeLanguageComponent } from './playground/change-language/change-language.component';
import { PlayGroundComponent } from './playground/playground.component';
import { PowerhouseChangeLanguageComponent } from './powerhouse/change-language/change-language.component';
import { PowerhouseOtherIntruitiveFeaturesComponent } from './powerhouse/other-intuitive-features/other-intuitive-features.component';
import { CliComponent } from './cli/cli.component';
import { ComparsionToOtherLibrariesComponent } from './comparison-to-other-libraries/comparison-to-other-libraries.component';
import { PowerhouseSanitizeComponent } from './powerhouse/sanitize/sanitize.component';
import { PowerhousePurePipeComponent } from './powerhouse/pure-pipe/pure-pipe.component';
import { NgxCodeComponent } from './code/code.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { TranslateCleanCodeComponent } from './translate-clean-code/translate-clean-code.component';


const NGX_TRANSLATE_EXTENSION_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'en/playground' },
  { path: ':languageCode/playground', component: PlayGroundComponent },
  {
    path: 'getting-started',
    component: NgxTranslateExtensionGettingStartedComponent
  },
  {
    path: 'attribute-directive',
    component: PowerhouseAttributeDirectiveComponent
  },
  {
    path: 'pipe',
    component: PowerhousePipeComponent
  },
  {
    path: 'structural-directive',
    component: PowerhouseStructuralDirectiveComponent
  },
  {
    path: 'decorator',
    component: PowerhouseDecoratorComponent
  },
  {
    path: 'validation-message',
    component: PowerhouseValidationMessageComponent
  },
  { path: ':languageCode/change-language', component: PowerhouseChangeLanguageComponent },
  { path: 'other-intuitive-features', component: PowerhouseOtherIntruitiveFeaturesComponent },
  { path: 'sanitize', 
  // component: PowerhouseSanitizeComponent,
    loadChildren: () => import('src/app/components/ngx-translate-extension/powerhouse/sanitize/sanitize.module').then(m => m.SanitizeModule) 
  },
  { path: 'pure-pipe', component: PowerhousePurePipeComponent },
  {
    path: 'spec-comparison',
    loadChildren: () => import('src/app/components/ngx-translate-extension/spec-comparison/comparison.module').then(m => m.ComparisonModule),
  },
  {
    path: 'code',
    component: NgxCodeComponent
  },
  {
    path: 'comparison',
    component: ComparisonComponent
  },
  {
    path: 'translate-clean-code',
    component: TranslateCleanCodeComponent
  },
  {
    path: 'rxweb-cli',
    component: CliComponent
  },
  {
    path: 'confidence',
    component: ConfidenceComponent
  },
  {
    path: 'playground',
    component: PlayGroundComponent
  },
  {
    path: 'compare-to',
    component: ComparsionToOtherLibrariesComponent
  },
  {
    path: 'clean-code-comparison',
    loadChildren: () => import('src/app/components/ngx-translate-extension/clean-code/clean-code.module').then(m => m.CleanCodeModule),
  },
  {
    path: ':languageCode/pre-load-module', loadChildren: () => import('./playground/pre-load-module/pre-load-module.component').then(m => m.PreLoadModule)
  }
];
export const NGX_TRANSLATE_EXTENSION_ROUTING = RouterModule.forChild(NGX_TRANSLATE_EXTENSION_ROUTES);
